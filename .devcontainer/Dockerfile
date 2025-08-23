# Use the official Node.js 22 (latest LTS) image
FROM node:22-bullseye

# Install additional tools useful for development
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    vim \
    && rm -rf /var/lib/apt/lists/*

# Verify Node.js and npm versions
RUN node --version && npm --version

# Set the working directory
WORKDIR /workspace

# Install global npm packages that might be useful
RUN npm install -g \
    @next/codemod \
    npm-check-updates

# Create a non-root user
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Switch to the node user
USER $USERNAME

RUN npm install -g @anthropic-ai/claude-code

# Set up the shell environment
RUN echo 'alias ll="ls -alF"' >> ~/.bashrc \
    && echo 'alias la="ls -A"' >> ~/.bashrc \
    && echo 'alias l="ls -CF"' >> ~/.bashrc