# Development Container

This project includes a VS Code development container configuration that provides a consistent development environment with the latest stable Node.js and npm.

## What's Included

- **Node.js 22** (latest LTS)
- **Latest npm** (comes with Node.js 22)
- **Git** and **GitHub CLI**
- **VS Code Extensions**:
  - TypeScript support
  - Prettier code formatter
  - Tailwind CSS IntelliSense
  - ESLint
  - Auto Rename Tag
  - Path IntelliSense

## Getting Started

### Prerequisites
- [VS Code](https://code.visualstudio.com/)
- [Remote - Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Usage

1. **Open in Container**:
   - Open VS Code in the project root
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Select "Remote-Containers: Reopen in Container"
   - Wait for the container to build and start

2. **Automatic Setup**:
   - Dependencies are automatically installed (`npm install`)
   - Development server starts automatically (`npm run dev`)
   - Port 3000 is forwarded for the Next.js dev server

3. **Manual Commands** (if needed):
   ```bash
   # Install dependencies
   npm install
   
   # Start development server
   npm run dev
   
   # Check for updates
   npm-check-updates
   
   # Run linting
   npm run lint
   ```

## Benefits

- **Consistent Environment**: Same Node.js/npm versions across all developers
- **Latest Tools**: Always uses the most recent stable versions
- **Pre-configured**: All necessary VS Code extensions and settings included
- **Isolated**: Doesn't affect your local machine's Node.js installation
- **Easy Onboarding**: New developers can start immediately without setup

## Customization

You can modify the devcontainer configuration in:
- `.devcontainer/devcontainer.json` - VS Code settings and extensions
- `.devcontainer/Dockerfile` - Container image and system packages