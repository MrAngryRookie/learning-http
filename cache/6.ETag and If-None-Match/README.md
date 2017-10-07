1.第一次请求，如果response header含有ETag
2.第二次请求，request header就会有 If-None-Match，值就是上次请求服务端发来的Etag
3.第二次发送过去的If-None-Match，服务端会对比与其储存的Etag是不是一致
4.一致说明内容没变化，返回304；
5.不一致就重新从服务端返回内容。
6.Etag检测的是内容是否要变化，所以你可以将index.html的内容改变一下，比如我改了<div>我改下内容</div>
7.然后刷新页面就会发现Etag的值变了，就不返回304了