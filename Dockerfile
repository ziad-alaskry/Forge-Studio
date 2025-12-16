# --------- BUILD STAGE ---------
    FROM node:18-alpine AS builder
    WORKDIR /app

    # Install dependencies 
    COPY package*.json ./ 
    RUN npm install 

    # Copy all files 
    COPY .. 

# ----------- PRODUCTION STAGE ---------
    FROM node:18-alpine
    WORKDIR /app
    
    # Copy build output from builder 
    COPY --from=builder /app ./ 

    ENV NODE_ENV=production

    EXPOSE 3000

    CMD ["npm" , "start"]
