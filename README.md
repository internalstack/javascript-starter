# TypeScript App Starter

This repository provides a minimal setup for running an InternalStack app server using TypeScript, making it simple to kickstart your development process.

## Getting Started

### Setup

1. **Obtain Your API Key**
   - Visit the InternalStack Cloud console and generate your API key.

2. **Configure Environment Variable**
   - Set the `INTERNALSTACK_API_KEY` environment variable with the API key you obtained.
   - Example command for setting an environment variable:
     - **On macOS/Linux:**
       ```sh
       export INTERNALSTACK_API_KEY=your_api_key_here
       ```

### Installation and Running the Server

1. **Install Dependencies**
   - Open your terminal and navigate to the root directory of the project.
   - Run the following command to install the necessary packages:
     ```sh
     npm install
     ```

2. **Start the Server**
   - Run the server with this command:
     ```sh
     npm run start
     ```

## Additional Information

- This boilerplate is designed to be a lightweight starting point. Feel free to customize it further to suit your project needs.
- Ensure your API key is kept secret and not committed to your version control.

