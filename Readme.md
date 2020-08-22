# Starting client
"npm start dev" to start client for development


# If port is in use:
Windows:
    netstat -ano | findstr :3000
    tskill [PID]

Linux/Mac:
    lsof -i tcp:3000
    kill -9 [PID]