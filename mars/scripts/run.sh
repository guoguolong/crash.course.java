# cd ~/projs/mars
export PROJ_PATH=~/projs/mars
export LIBS_PATH=$PROJ_PATH/libs
export TARGET_PATH=$PROJ_PATH/target
# java -cp $PROJ_PATH/target com.banyuan.mars.App
java -jar $TARGET_PATH/app.jar
