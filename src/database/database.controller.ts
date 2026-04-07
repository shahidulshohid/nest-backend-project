import { Controller, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Controller('database')
export class DatabaseController implements OnModuleInit, OnApplicationShutdown {
    private isConnected = false;

    onModuleInit() {
        this.isConnected = true;
        console.log("Database Connected");
    }

    onApplicationShutdown(signal: string) {
        this.isConnected = false;
        console.log(`Database Disconnected due to app shutdown, signal ${signal}`);
    }

    getStatus() {
        return this.isConnected ? "Connected" : "Disconnected";
    }
}