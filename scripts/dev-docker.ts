import chalk from "chalk";
import cliSpinners from "cli-spinners";
import * as yaml from "js-yaml";
import ora from "ora";
import { exec } from "child_process";
import * as fs from "fs";
import { promisify } from "util";

const DOCKER_COMPOSE_FILEPATH = "./docker/docker-compose.yaml";

interface DockerComposeService {
  image?: string;
  container_name?: string;
  ports?: string[];
  [key: string]: any;
}

interface DockerComposeConfig {
  version: string;
  services: {
    [key: string]: DockerComposeService;
  };
}
const execAsync = promisify(exec);

async function readDockerComposeFile(
  filePath: string
): Promise<DockerComposeConfig> {
  const spinner = ora(cliSpinners.moon).start("Reading docker compose file...");
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    spinner.succeed("Read docker compose file.");
    return yaml.load(fileContent) as DockerComposeConfig;
  } catch (error) {
    spinner.fail("Failed to read docker compose file.");
    throw error;
  }
}

async function startDockerCompose(filePath: string): Promise<void> {
  const spinner = ora(cliSpinners.moon).start(
    "Starting docker compose file..."
  );
  try {
    await execAsync(`docker compose -f ${filePath} up -d --remove-orphans`);
    spinner.succeed("Started docker compose file.");
  } catch (error) {
    spinner.fail("Failed to start docker compose file.");
    throw error;
  }
}

async function bootstrap() {
  try {
    process.on("SIGINT", () => {
      console.error(chalk.yellow("\nReceived closing signal, closing app..."));
      process.exit(0);
    });
    await readDockerComposeFile(DOCKER_COMPOSE_FILEPATH);
    // Start Docker Compose
    await startDockerCompose(DOCKER_COMPOSE_FILEPATH);
    process.exit(0);
  } catch (error) {
    console.error(
      chalk.red(`An unexpected error occurred: ${(error as Error).message}`)
    );
    process.exit(1);
  }
}

bootstrap();
