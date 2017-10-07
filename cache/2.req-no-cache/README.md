1.服务端设置了Cache-Control: max-age=3600
2.客户端设置了Cache-Control: no-cache
3.可以看出客户端的no-cache使得请求没有缓存
4.与客户端的max-age=0的区别呢？no-cache不会进行验证，而max-age=0会
5.为了验证，打开了Etag这个字段，可以看出在这种情况下，no-cache还是使得请求重新开始，并没有验证（并不返回304）