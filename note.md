### 收银机查看IP   
1.mpos里面--->更多-系统设置-本机信息
2.终端--->ip ad sh  &  ifconfig


### mpos卡住无法退出
```
sudo -i //进入特权模式
ps aux | grep MPOS //查询进程uid
kill -9 1502 //执行
```

### clash for windows 
[clash下载](https://github.com/Fndroid/clash_for_windows_pkg/releases)
[clash汉化补丁](https://github.com/BoyceLig/Clash_Chinese_Patch/releases/)
[文章来自](https://uzbox.com/tech/clash.html)

