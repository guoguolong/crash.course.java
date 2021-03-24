#include <stdio.h>
#include "os.h"

void colorful_printf(int color, char * s) {
    #ifdef _WIN32
        int format = FOREGROUND_RED|FOREGROUND_INTENSITY|BACKGROUND_GREEN|BACKGROUND_INTENSITY;
        HANDLE h = GetStdHandle(STD_OUTPUT_HANDLE);

        CONSOLE_SCREEN_BUFFER_INFO originScreenInfo;

        GetConsoleScreenBufferInfo(h, &originScreenInfo); // Save the current color

        SetConsoleTextAttribute(h, format); // Set the new color
        printf("%s", s);

        SetConsoleTextAttribute(h, originScreenInfo.wAttributes); // Restore the original color
    #else
        char *format = "\e[1;31;42m";
        printf("%s%s", format, s);
    #endif
}
int main() {
    colorful_printf(3, "Hello Colorful\n");
    return 0;
}