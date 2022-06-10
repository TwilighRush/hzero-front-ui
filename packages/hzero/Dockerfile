FROM nginx:alpine

ADD ./dist /usr/share/nginx/html
ADD ./deploy.sh /home/deploy.sh

EXPOSE 80

CMD [ "/home/deploy.sh" ]