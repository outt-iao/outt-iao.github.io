addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 设置要代理的目标 URL
  const targetURL = 'https://myj-version.obs.cn-south-1.myhuaweicloud.com/mpos-v2.0/x86/mpos-x86-0.7.9.0.zip'; // 替换为你要代理的目标 URL

  // 构建新的请求
  const modifiedRequest = new Request(targetURL, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'follow',
  })

  try {
    // 发送请求并获取响应
    const response = await fetch(modifiedRequest)

    // 处理响应并返回
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    })
  } catch (error) {
    return new Response('Error: ' + error.message, { status: 500 })
  }
}
