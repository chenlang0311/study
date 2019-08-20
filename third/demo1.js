/**
 * CI:持续集成
 * CD:持续交付
 * CD:持续部署(较少，非常依赖自动化测试)
 * devops:运维平台,持续部署平台
 * CI平台:jenkins(svn)，Travis CI(git),circle CI(最新的)
 * 花生壳:内网穿透
 * FIS3:自动化构建工具(webpack/jdists/package.json/chai/supuertest/mocha/selenium-webdriver)
 * 部署工具:rsync,shelljs,yargs
 * 自动部署
 * CI：本机开发=>代码仓库(hooks钩子：add/merge)=>CI平台（私钥，集成node环境）=> QA(公钥)
 * CD：代码仓库 =>  QA(同意) => server
 * webpack集群化编译，docker
 */

 /**
  * 前端工程化
  *  自动化编译(webpack)
  *  前端模块化
  *     1. 每一个文件都是一个模块，有自己的作用域
  *     2. 历史(现在用UMD):CMD(按需引入),AMD(依赖前置) => commonjs; requirejs => seajs
  *     3. 优缺点
  *         1.CMD依赖是就近声明，通过内部require方法进行声明，但是因为是异步模块，加载器需要提前加载这些模块，所以模块真正使用前需要提取模块里面的所有依赖
  *         2.不能直接压缩，require局部变量如果替换无法加载资源
  *         3.CMD路径参数不能进行字符串运算
  *         4.AMD的依赖是提前声明，这种优势的好处是依赖无需通过静态分析，无论是加载器还是自动化工具都可以直接的获取到依赖
  *         5.AMD依赖提前声明在代码书写上不是那么友好
  *         6.AMD模块内部与NodeJs的Modules有一定的差异
  *     4.import不能跨域，可以用importscript
  *     5.web components
  *         1.custom elements
  *         2.HTML Imports
  *         3.HTML Templates
  *         4.Shadow Domm CSS shadow tree
  *  静态资源定位:
  *     1. 版本改变要改变hash值，版本号,先上线静态资源，非覆盖的上线，回滚版本容易，只要回滚html，但是会增加硬盘内容，你能写多少M的代码，缓存
  *     2. 配置超长时间本地缓存--节省带宽，提高性能
  *     3. 采用内容摘要作为缓存更新依据--精确的缓存控制
  *     4. 静态资源CDN部署(webpack配置publickpath) -- 优化网络请求
  *     5. 更新资源发布路径，实现非覆盖式发布-- 平滑升级          
  *  前端组件化开发: yog2
  *  自动化部署测试配合版本库
  *  自动化性能优化(前端架构开发下)
  */