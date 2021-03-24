#include <sys/types.h>
#include <sys/socket.h>
#include <stdio.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <string.h>

#define PORT 3339 

int main(int argc, char const *argv[]) {
	int sockfd;
	int len;
	struct sockaddr_in addr;
	int newsockfd;
	char *buf = "come on, baby.come on, baby.come on, baby.come on, baby.come on, baby.come on, baby.come on, baby.come on, baby.come on, baby.";
	char *buf2 = "goviris";
	
	int rec_buf_len = 40;
	char rebuf[rec_buf_len];
	sockfd = socket(AF_INET, SOCK_STREAM, 0);
	addr.sin_family = AF_INET;
	addr.sin_port = PORT;
	len = sizeof(addr);

	newsockfd = connect(sockfd, (struct sockaddr *) &addr, len);
	if (newsockfd == -1) {
		perror("连接失败");
		return 1;
	}
	for(;;) {
		printf(" send...\n");
		int err = send(sockfd, buf, strlen(buf), 0);

		err = send(sockfd, buf2, strlen(buf2), 0);
		printf(" done\n");
	}
	sleep(4);
	recv(sockfd, rebuf, rec_buf_len - 2, 0);
	rebuf[rec_buf_len - 1] = '\0';
	printf("receive message: \n%s\n", rebuf);
	close(sockfd);
	return 0;	return 0;
}