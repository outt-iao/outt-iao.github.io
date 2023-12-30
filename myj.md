
# ubuntu命令
```
htop    //最直观的查看内存占用情况
sudo chmod 777 /etc/hosts  //给hosts所有权限
firefox    //打开火狐浏览器
top -o %MEM  //内存的方式进行排序
free -h  //显示系统当前的内存使用情况
sudo passwd root //设置root密码
fsck -t ext4 /dev/sda1 //一直输入y回车,t5以上的机器用于修复系统开机进入initramfs
ctrl+alt+F7  //切换图形界面
ctrl+alt+F1  //进入tty1 命令行界面
wget -O 1.zip 1.admintop.top  //下载mpos文件重命名为1.zip , O为大写
dir   //查看当前目录文件
cat  //查看文件里面的内容一些文本
cat /etc/hosts  //查看hosts的内容
```
# 收银机查看IP   
1.mpos里面--->更多-系统设置-本机信息<br/>
2.终端
```
ip a s  //列出当前系统中所有网络接口的配置信息
ifconfig   //显示网络接口信息
hostname -I   //查看ip
```
# mpos卡住无法退出
```
sudo pkill MPOS
sudo killall MPOS
```

# 云值守
```
#123456#21123#
```
![enter image description here](https://oos.admintop.top/raw/pic/11)
![enter image description here](https://oos.admintop.top/raw/pic/12)
![enter image description here](https://oos.admintop.top/raw/pic/13)
![enter image description here](https://oos.admintop.top/raw/pic/14)
