
# ubuntu命令
```
htop    //最直观的查看内存占用情况
sudo chmod 777 /etc/hosts  //给hosts所有权限
firefox    //打开火狐浏览器
top -o %MEM  //内存的方式进行排序
free -h  //显示系统当前的内存使用情况
```
# 收银机查看IP   
>1.mpos里面--->更多-系统设置-本机信息<br/>
2.终端
```
ip a s  //列出当前系统中所有网络接口的配置信息
ifconfig   //显示网络接口信息
hostname -I   //查看ip
```
# hosts设置权限
```
sudo -i
cd /root
cd /etc
chmod 777 -R hosts
```
# mpos卡住无法退出
```
sudo -i //进入特权模式
ps aux | grep MPOS //查询进程uid
kill -9 1502 //执行
```

```
sudo pkill MPOS
sudo killall MPOS
```

# clash for windows 
>[clash下载](https://github.com/Fndroid/clash_for_windows_pkg/releases) <br/>
>[clash汉化补丁下载](https://github.com/BoyceLig/Clash_Chinese_Patch/releases/) <br/>
>[文章来自](https://uzbox.com/tech/clash.html)

# 管理“此电脑”里删不掉的流氓“快捷方式”
>[MyComputerManager](https://github.com/1357310795/MyComputerManager/releases)

# usr.html代码来自
>[源文件](https://blog.csdn.net/weixin_44009656/article/details/124786874)

# 收藏链接
>[粤29440](https://icsp.myj.com.cn/?timestamp=1690175165&sign=FC5351D3CD19B54C3CF46D7DA467F53B&CompanyCode=GD&Mobile=13670017370&RoleId=1&ShopCode=%E7%B2%A429440)
><br/>
>[粤16982](https://icsp.myj.com.cn/?timestamp=1690014831&sign=0270D4FD3127774CBE2601F0DD5594AA&CompanyCode=GD&Mobile=13192911090&RoleId=1&ShopCode=%E7%B2%A416982)
