FROM node:23-alpine as builder

WORKDIR /app

COPY ./package.json ./

RUN npm config set registry https://registry.npmmirror.com/
RUN npm install -g pnpm && pnpm install -verbose && pnpm install 

COPY . .

RUN pnpm run build

#######

FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html