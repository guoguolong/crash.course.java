#include <sys/types.h>
#include <sys/socket.h>
#include <stdio.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>

#define PORT 3339 

int main(int argc, char const *argv[]) {
	char *sendbuf = "thanks";
	int buf_len = 4;
	char buf[buf_len];
	int s_fd, c_fd;
	int c_len;
	struct sockaddr_in s_addr;
	struct sockaddr_in c_addr;

	s_fd = socket(AF_INET, SOCK_STREAM, 0);
	s_addr.sin_family = AF_INET;
	s_addr.sin_addr.s_addr = htonl(INADDR_ANY);
	s_addr.sin_port = PORT;

	bind(s_fd, (struct sockaddr*) & s_addr, sizeof(s_addr));
	listen(s_fd, 20);
	while(1) {
		printf("plase wait a moment!\n");
		c_len = sizeof(c_addr);
		// 接收客户端连接请求
		c_fd = accept(s_fd, (struct sockaddr *) &c_addr, (socklen_t *__restrict) &c_len);
		int actual_len;
		printf("data is comming\n");
		// sleep(80000);
		getchar();
		printf("start to process\n");
		do {
			// printf("recv...\n");
			actual_len = recv(c_fd, buf, buf_len - 1 , 0);
			// printf("recived: %d\n", actual_len);
			buf[actual_len] = '\0';
			printf("%s|", buf);
		} while (actual_len > 0);
		printf("\n");

		send(c_fd, sendbuf, sizeof(sendbuf), 0);
		close(c_fd);
	}
	return 0;
}


