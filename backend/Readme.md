# Starting server
"npm run dev" to start server for development


# If port is in use:
Windows:
    netstat -ano | findstr :5000
    tskill [PID]

Linux/Mac:
    lsof -i tcp:3000
    kill -9 [PID]