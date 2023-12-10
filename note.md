
# ubuntu命令
```
htop    //最直观的查看内存占用情况
sudo chmod 777 /etc/hosts  //给hosts所有权限
firefox    //打开火狐浏览器
top -o %MEM  //内存的方式进行排序
free -h  //显示系统当前的内存使用情况
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


