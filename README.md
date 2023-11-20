# fall-2023
## The best class at SUNY New Paltz

## https://midterm-example.onrender.com/

#### Topics for Sep 28
- scripts section
- dependencies section
    - semantic versioning
    - package-lock.json
- nodemon (dev dependencies)
- express
    - basic routing
        - asynchronous programming
    - serving static files
    - error handling
- modules

### Don't forget your .env files. You can't see them here, but you need them. Those values also belong in your Environment variables of any hosting solution that you use.

#### Example Server .env
```
PORT=3000
BEST_CLASS=Web Development #objectivly speaking
MONGO_URI="mongodb+srv://jewpaltz:newpaltz@cluster0.ooi3z.mongodb.net/?retryWrites=true&w=majority"
MONGO_DB_NAME=amazify
```

#### Example Client .env
```
VITE_API_ROOT=http://localhost:3000/api/v1
```