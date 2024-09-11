### 计算机图形学编程（使用OpenGL和C++）（第2版） 示例代码

![封面](cover.jpg)

**Ubuntu安装 OpenGL及相关依赖**

```bash
$ sudo apt -y install build-essential libgl1-mesa-dev
$ sudo apt -y install freeglut3-dev
$ sudo apt -y install libglew-dev libsdl2-dev libsdl2-image-dev libglm-dev libfreetype6-dev
$ sudo apt -y install glew-utils libglew-dev libglew2.0 # for glew
$ sudo apt -y install libglfw3-dev # for glfw
```


**查看OpenGL版本信息**

```bash
$ sudo apt install mesa-utils
$ glxinfo | grep -i opengl
OpenGL vendor string: NVIDIA Corporation
OpenGL renderer string: NVIDIA GeForce RTX 2060/PCIe/SSE2
OpenGL core profile version string: 4.6.0 NVIDIA 535.179
OpenGL core profile shading language version string: 4.60 NVIDIA
OpenGL core profile context flags: (none)
OpenGL core profile profile mask: core profile
OpenGL core profile extensions:
OpenGL version string: 4.6.0 NVIDIA 535.179
OpenGL shading language version string: 4.60 NVIDIA
OpenGL context flags: (none)
OpenGL profile mask: (none)
OpenGL extensions:
OpenGL ES profile version string: OpenGL ES 3.2 NVIDIA 535.179
OpenGL ES profile shading language version string: OpenGL ES GLSL ES 3.20
OpenGL ES profile extensions:
```

**GLEW开源库**

项目链接：<https://github.com/nigels-com/glew>

apt命令安装：

```bash
$ apt-cache search glew
fonts-glewlwyd - OAuth2 authentication server providing Json Web Tokens - font files
glew-utils - OpenGL Extension Wrangler - utilities
glewlwyd - OAuth2 authentication server providing Json Web Tokens
glewlwyd-common - OAuth2 authentication server providing Json Web Tokens - common files
libglew-dev - OpenGL Extension Wrangler - development environment
libglew2.0 - OpenGL Extension Wrangler - runtime environment
libglewmx-dev - OpenGL Extension Wrangler MX - development environment
libglewmx1.13 - OpenGL Extension Wrangler (Multiple Rendering Contexts)
$ sudo apt install glew-utils libglew-dev libglew2.0
```

**GLFW开源库**

参考文档：<https://www.glfw.org/docs/3.3/quick.html>
