<template><div><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h1>
<table>
<thead>
<tr>
<th><strong>版本号</strong></th>
<th>PickWiz：1.8.0PickLight：1.8.0GLIA：0.4.9RLIA：0.3.4MixedAI：0.6.0DexSim：0.3.1Camera SDK:<ul>
<li>Xema：1.5.4.8</li>
<li>Finch：1.2.1.3</li>
<li>Sparrow：3.5.2</li>
<li>Kingfisher-R: 0.1.1</li>
<li>Stereo：4.3.4</li>
<li>Enumerate：1.0</li>
</ul></th>
</tr>
</thead>
</table>
<p>PickWiz 1.8 是3D视觉引导产品的重大升级，对比 PickWiz 1.7，我们针对 拆垛、无序抓取、有序上下料、定位装配 四大场景，做了大量的功能新增和体验优化，重大更新包括：<strong>视觉计算加速、影子模式支持更多场景、一键联通支持训练成像模型、新模型训练架构、SPARROW-SC新相机、纸箱多抓、机器人外挂脚本 </strong>等等。极大地提高了功能的丰富度，同时降低了学习成本。具体更新如下：</p>
<blockquote>
<p><strong>注意</strong></p>
<ol>
<li>
<p>PickWiz 1.8 不支持打开 PickWiz 1.7+ 或更早版本项目配置，如需升级，要基于 PickWiz V1.8 重新配置项目。</p>
</li>
<li>
<p>如从PickWiz 1.7+版本升级至1.8+时，至少升级至PickWiz 1.8.0.1较稳定版本（版本说明见<a href="https://dexforce.feishu.cn/wiki/YTu1wAW26iTvITkgEsbcvcrRnB3#share-DSAIdmv5ZoqR3fxhahkcmU1BnTc" target="_blank" rel="noopener noreferrer"><strong>下方</strong></a>）。</p>
</li>
</ol>
</blockquote>
<blockquote>
<p>蓝色背景表示 重要功能更新</p>
</blockquote>
<h1 id="功能新增" tabindex="-1"><a class="header-anchor" href="#功能新增"><span>功能新增</span></a></h1>
<h2 id="_1-欢迎页" tabindex="-1"><a class="header-anchor" href="#_1-欢迎页"><span>1. 欢迎页</span></a></h2>
<ol>
<li>
<p>有序上下料场景中，新增 “面型工件有序上下料（并行化）” 场景，场景特点在 视觉计算耗时少，减少了中间计算过程（实例生成过滤、姿态生成等），直接识别生成抓取点，具体场景使用见：<a href="https://dexforce.feishu.cn/wiki/IlX0wexxfiEFnhkyzaEcfYUPnZM" target="_blank" rel="noopener noreferrer"> 面型工件有序上下料（并行化）视觉参数调整指南</a></p>
<blockquote>
<p><strong>注意</strong></p>
<p>该版本中，此功能仍为<strong>测试中</strong>状态，因存在3D匹配不准的风险，故项目使用前，需要提前在场内稳定性测试；以及提项目支持单，找研发人员（ ）评估功能实践性。</p>
</blockquote>
</li>
<li>
<p>“视觉分类”功能选项 新增了基于颜色的分类功能，适用于以颜色作为工件/其他场景物体的分类特征的情况，具体逻辑见：<a href="https://dexforce.feishu.cn/wiki/YoZ8woaOSiOH4PkAbDycoPh4nRg?from=from_copylink" target="_blank" rel="noopener noreferrer"> 视觉分类使用指南</a></p>
</li>
<li>
<p>拆垛、有序场景中，功能选项新增了“<strong>隔板和底托检测</strong>”，适用于每层物料间存在隔板，以及底部放置了底托的场景，可通过<code v-pre>视觉分类</code>分别录入隔板、底托、工件的三种数据类型，具体使用流程见：<a href="https://dexforce.feishu.cn/wiki/HEEew5C3bi20spkODtFchoe5nhR" target="_blank" rel="noopener noreferrer"> 隔板和底托检测使用指南</a></p>
</li>
</ol>
<h2 id="_2-菜单" tabindex="-1"><a class="header-anchor" href="#_2-菜单"><span>2. 菜单</span></a></h2>
<ol>
<li>
<p>支持计算多条历史数据的重复定位精度。</p>
<p><strong>功能说明</strong></p>
<p>批量选中多条历史数据后，在重复定位精度模块中点击<code v-pre>开始计算</code>即可。</p>
<p>由于历史数据重复计算的结果不会变化，故重复计算次数固定为1，不支持修改。</p>
<p><strong>适用场景</strong></p>
<p>无法使用项目现场工控机进行调试时，用户会拷贝历史数据至另一台工控机，可针对这些历史数据进行重复定位精度计算来排查稳定性。</p>
<blockquote>
<p><strong>使用建议</strong></p>
<p>需要保证：</p>
<ol>
<li>
<p>使用同一作业场景下的历史数据。</p>
</li>
<li>
<p>多次识别的第一个实例结果是同一实例且同一抓取点。</p>
</li>
</ol>
<p>否则结果将不符合预期（如极差值很大）。</p>
</blockquote>
</li>
<li>
<p>新增了 视觉温漂实时校正 的功能。</p>
<p><strong>使用说明</strong></p>
<p>见：<a href="https://dexforce.feishu.cn/wiki/ShViwFmlrigMBGk2HUMc3ZcKn3c?from=from_copylink" target="_blank" rel="noopener noreferrer"> 标定球漂移校正指南</a></p>
<p><strong>适用场景</strong></p>
<p>相机在现场长时间作业后，存在较明显的位移、温漂的场景。</p>
</li>
<li>
<p>支持自定义 3D 可视化视窗的背景色，避免无法分辨与背景色差小的场景点云。</p>
<p><strong>功能说明</strong></p>
<p>菜单可打开颜色编辑器，主要包含了两种类型颜色设置：纯色背景、渐变色背景；同时支持一键“恢复默认背景”。</p>
<p><img src="@source/PickWiz/images/image.png" alt=""></p>
<p><img src="@source/PickWiz/images/image-1.png" alt=""></p>
</li>
<li>
<p>支持“打开项目文件夹”。</p>
<p><img src="@source/PickWiz/images/image-2.png" alt=""></p>
</li>
</ol>
<h2 id="_3-相机" tabindex="-1"><a class="header-anchor" href="#_3-相机"><span>3. 相机</span></a></h2>
<ol>
<li>
<p>支持新上市的相机Sparrow-SC，未来项目可走正常流程供货。</p>
<p><strong>相机概述</strong></p>
<p>Sparrow-SC 对标 旗舰款相机Xema-SCW，相比之下，优势如下：</p>
<ol>
<li>
<p>彩色图像输出：适用更广泛的应用场景；</p>
</li>
<li>
<p>精度更高：精度优于Xema-SCW相机；</p>
</li>
<li>
<p>采图节拍更快：性能优于Xema-SCW相机；</p>
</li>
<li>
<p>高使用稳定性：避免了温漂导致的精度丢失情况；</p>
</li>
<li>
<p>高性价比：价格更低，但整体优势优于Xema-SCW。</p>
</li>
</ol>
<p>具体介绍、功能使用可参考： </p>
<p><strong>相机指标对比</strong></p>
</li>
<li>
<p>支持KINGFISHER相机进行一键联通训练成像模型。</p>
<blockquote>
<p>具体使用操作见：<a href="https://dexforce.feishu.cn/wiki/JQnTw5claiCFUZkLzU8cHBYnn3f" target="_blank" rel="noopener noreferrer"> 一键联通训练成像模型</a></p>
</blockquote>
</li>
<li>
<p>支持KINGFISHER相机在软件侧进行影子模式的数据收集和训练。</p>
<blockquote>
<p>具体使用操作见：<a href="https://dexforce.feishu.cn/wiki/MYX0wFnvFippq9kV2fqcL1vBngb" target="_blank" rel="noopener noreferrer"> 如何使用KINGFISHER影子模式</a></p>
</blockquote>
</li>
<li>
<p>XEMA相机新增了相机参数的注释，便于理解参数作用和调整方式。</p>
<p><img src="@source/PickWiz/images/image-3.png" alt=""></p>
</li>
<li>
<p>支持相机实时调参：参数一经改动，系统会自动采集图像和显示调参后的成像效果，可提高调参效率。</p>
</li>
<li>
<p>针对XEMA、SPARROW相机（同时支持彩色和黑白模式），2D图叠加曝光参数的曝光类型新增了HDR，即高动态模式。</p>
<p><strong>适用场景</strong></p>
<p>高动态可使图像层次更分明，适用于明暗差别大（特别是面对反光工件）场景的2D图像处理（与3D点云成像无关）。</p>
<p><strong>调参建议</strong></p>
<p>使用高动态时，可根据具体的场景和工件，选择<strong>高动态曝光次数</strong>，取值范围 2~6，默认2。若2D图像质量不佳，应当增加组数对物体进行多次曝光，以达到最佳的成像质量。</p>
<blockquote>
<p>建议在满足2D识别精度/识别率的情况下，使用更少的高动态曝光次数。</p>
</blockquote>
<p><img src="@source/PickWiz/images/image-4.png" alt=""></p>
</li>
<li>
<p>校正相机精度功能支持默认保存样本。若首次打开校正相机精度功能时，或出现系统异常闪退再次打开软件时，可恢复样本数据，无需重新采集。</p>
<blockquote>
<p>解决的问题：旧版本会在关闭功能模块或闪退时重置样本栏，需要重新采集才可再次校正，比较繁琐。</p>
</blockquote>
</li>
</ol>
<h2 id="_4-机器人" tabindex="-1"><a class="header-anchor" href="#_4-机器人"><span>4. 机器人</span></a></h2>
<ol>
<li>
<p>新增多个通讯指令：</p>
<table>
<thead>
<tr>
<th>指令类型</th>
<th>指令名称</th>
<th>指令</th>
<th>值</th>
<th>产品截图</th>
<th>作用</th>
<th>支持场景</th>
</tr>
</thead>
<tbody>
<tr>
<td>机器人发送至PickWiz</td>
<td>拍照计算类型</td>
<td>co</td>
<td>6</td>
<td><img src="images/image-13.png" alt=""></td>
<td>触发工控机关机</td>
<td>所有</td>
</tr>
<tr>
<td></td>
<td>拍照计算类型</td>
<td>co</td>
<td>5</td>
<td><img src="images/image-12.png" alt=""></td>
<td>触发运行选中的历史数据<blockquote>
<p>仅支持运行单条历史数据，不支持批量运行历史数据。</p>
</blockquote><blockquote>
<p><strong>注意安全</strong></p>
<p>现场需要谨慎使用该指令，避免误触发了历史数据的运行，走错点位导致机器人撞机。</p>
</blockquote></td>
<td>所有</td>
</tr>
<tr>
<td></td>
<td>拍照计算类型</td>
<td>co</td>
<td>4</td>
<td><img src="images/image-11.png" alt=""></td>
<td><a href="https://dexforce.feishu.cn/wiki/ShViwFmlrigMBGk2HUMc3ZcKn3c#share-EofTdmi2ZoNBmOxYujyc0BqpnrA">触发视觉温漂作业运行并计算漂移量Δ</a></td>
<td>所有</td>
</tr>
<tr>
<td></td>
<td>单行最大组合数</td>
<td>max_merge_num</td>
<td>自定义</td>
<td><img src="images/image-10.png" alt=""></td>
<td>支持将‘单行最大组合数’传入纸箱组合策略，且优先使用机器人传入值（相较于前端设置值）</td>
<td>纸箱单拆</td>
</tr>
<tr>
<td></td>
<td>最大组合行数</td>
<td>max_merge_lines</td>
<td>自定义</td>
<td><img src="images/image-9.png" alt=""></td>
<td>支持将‘最大组合行数’传入纸箱组合策略，且优先使用机器人传入值（相较于前端设置值）</td>
<td>纸箱单拆</td>
</tr>
<tr>
<td>PickWiz发送至机器人</td>
<td>分类类型</td>
<td>cls_id</td>
<td>系统自动分配</td>
<td><img src="images/image-8.png" alt=""></td>
<td>返回 功能选项 - 视觉分类 在工件模块中的分类器里的类型ID</td>
<td>拆垛、有序</td>
</tr>
<tr>
<td></td>
<td>场景分类类型</td>
<td>scn_cls_id</td>
<td>系统自动分配</td>
<td><img src="images/image-14.png" alt=""></td>
<td>返回 功能选项 - 隔板与底托检测 在工件模块中的分类器里的类型ID</td>
<td>拆垛</td>
</tr>
<tr>
<td></td>
<td>是否在漂移阈值内</td>
<td>in_dt</td>
<td><img src="images/image-7.png" alt="">0表示不在阈值内1表示在阈值内</td>
<td><img src="images/image-6.png" alt=""></td>
<td><a href="https://dexforce.feishu.cn/wiki/ShViwFmlrigMBGk2HUMc3ZcKn3c#share-DRQSdrWZNouTL6xmv0TcggYLnsj">返回是否满足漂移校正阈值的判断</a></td>
<td>所有</td>
</tr>
<tr>
<td></td>
<td>场景物体尺寸ID</td>
<td>so_size_id</td>
<td>系统自动分配</td>
<td><img src="images/image-5.png" alt=""></td>
<td>返回本次识别的场景物体（一般为料框）尺寸对应的索引参考：<a href="https://dexforce.feishu.cn/wiki/MYTmwgFoCiNhV0kNsQHcMeaHn2d?from=from_copylink"> 场景物体使用指南</a></td>
<td>所有</td>
</tr>
<tr>
<td></td>
<td>场景物体尺寸</td>
<td>so_size</td>
<td>系统自动分配</td>
<td><img src="images/image-27.png" alt=""></td>
<td>返回本次识别的场景物体（一般为料框）的具体尺寸（XYZ），单位mm参考：<a href="https://dexforce.feishu.cn/wiki/MYTmwgFoCiNhV0kNsQHcMeaHn2d?from=from_copylink"> 场景物体使用指南</a></td>
<td>所有</td>
</tr>
<tr>
<td></td>
<td>场景物体位姿</td>
<td>so_pose</td>
<td>系统自动分配</td>
<td><img src="images/image-26.png" alt=""></td>
<td>返回本次识别的场景物体（一般为料框）配准姿态，单位mm参考：<a href="https://dexforce.feishu.cn/wiki/MYTmwgFoCiNhV0kNsQHcMeaHn2d?from=from_copylink"> 场景物体使用指南</a></td>
<td>所有</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>支持TCP客户端。</p>
<p><strong>适用场景</strong></p>
<p>适用于现场设备只可作服务端的情况。</p>
<p><img src="@source/PickWiz/images/img_v3_02lk_639a6512-5906-4540-9732-e90ee751d3dg.jpg" alt=""></p>
</li>
<li>
<p>PickWiz作为服务端时，当多个机器人客户端连接，除了已连接上的客户端，其他客户端尝试连接时日志给出拒绝请求的提示。</p>
<p><img src="@source/PickWiz/images/image-15.png" alt=""></p>
</li>
<li>
<p>使用KINGFISHER相机时，支持配置“取图完成”信号；且修改 “拍照完成” 改为 “成像完成”。</p>
<p><strong>参数说明</strong></p>
<p>“取图完成”代表相机拍照后获取到图像数据，但未生成点云或做图像处理，常用于一个机器人在在成像完成前发出指令信号，触发系统/脚本执行下一步操作，无需等待成像完成（因成像完成的耗时比取图完成的耗时多），一定程度可减少整体流程的耗时；“成像完成”代表相机完成取图和对图像数据进行处理。</p>
<p><strong>使用说明</strong></p>
<p>分别在对应的配置模块下进行完成信号的设置，通过机器人发送对应信号指令即可。</p>
<p><img src="@source/PickWiz/images/image-16.png" alt=""></p>
<p><img src="@source/PickWiz/images/image-17.png" alt=""></p>
</li>
<li>
<p>新增了机器人通讯的外挂脚本。</p>
<p><strong>功能说明</strong></p>
<p>外挂脚本，只需要关注定制逻辑（如抓取逻辑的处理），无需涉及机器人与软件通信的部分。</p>
<p>支持PickWiz端发送作业信息（如返回作业ID等）给机器人，即通信后处理；以及支持PickWiz端接收到机器人报文时进行通信前处理（如切换目标ROI ID等），具体流程见：<a href="https://dexforce.feishu.cn/wiki/B2nwwQpOmin5PnkC2VqcfJQPnBe" target="_blank" rel="noopener noreferrer"> 外挂脚本使用指南</a>。</p>
</li>
</ol>
<h2 id="_5-一键联通" tabindex="-1"><a class="header-anchor" href="#_5-一键联通"><span>5. 一键联通</span></a></h2>
<ol>
<li>
<p>一键联通新增“新模型训练框架”，新模型训练框架下的识别效果预计会优于“旧模型训练框架”，但验证量较少，如训练后效果不及预期，请提单，并同时使用“旧模型训练框架”重新训练。</p>
<p><img src="@source/PickWiz/images/image-18.png" alt=""></p>
</li>
<li>
<p>定位装配场景支持一键联通训练视觉模型和成像模型，具体使用与其他场景基本一致（见：<a href="https://dexforce.feishu.cn/wiki/RlYow50mHixpxWkbJGEcO7WTn9f" target="_blank" rel="noopener noreferrer"> 一键联通训练视觉模型</a><a href="https://dexforce.feishu.cn/wiki/JQnTw5claiCFUZkLzU8cHBYnn3f?from=from_copylink" target="_blank" rel="noopener noreferrer"> 一键联通训练成像模型</a>）唯一区别在，该场景下新增了一个配置“<a href="https://dexforce.feishu.cn/wiki/JQnTw5claiCFUZkLzU8cHBYnn3f#share-BBUGdEJLEowzgPxGABJcU8BQnmf" target="_blank" rel="noopener noreferrer">视野类型</a>”，训练前需要选择对应选项。</p>
</li>
<li>
<p>新增了一些防呆机制：</p>
<ol>
<li>
<p>训练成像模型时，新增 ROI工作区顶部是否距离相机原点过近 的防呆验证。</p>
<p><img src="@source/PickWiz/images/image-19.png" alt="一键联通设置弹窗下方进行提示"></p>
<p><img src="@source/PickWiz/images/image-20.png" alt="错误示范（顶部过高，甚至高于相机原点高度）"></p>
</li>
<li>
<p>因视觉模型训练存在限制，来料形式设为紧密贴合时，每行每列的乘积最大不可超过40，否则会出现防呆弹窗。</p>
<p><img src="@source/PickWiz/images/image-21.png" alt=""></p>
</li>
<li>
<p>支持一键联通导出配置时，默认检验工件/料框的网格模型是否在坐标中心，若不在中心则会报警提示（下图）。</p>
<p><img src="@source/PickWiz/images/image-22.png" alt=""></p>
</li>
</ol>
</li>
</ol>
<h2 id="_6-视觉计算配置" tabindex="-1"><a class="header-anchor" href="#_6-视觉计算配置"><span>6. 视觉计算配置</span></a></h2>
<ol>
<li>
<p>多个场景支持视觉加速模式。</p>
<p><strong>功能说明</strong></p>
<p>开启后，默认一次识别视野内所有工件实例并输出视觉结果，且视觉计算的耗时小。</p>
<p><strong>适用场景</strong></p>
<p>适用于工件实例数量较多且节拍要求高的场景。</p>
<p><strong>支持场景类型</strong></p>
<ul>
<li>
<p>圆柱场景</p>
<p><img src="@source/PickWiz/images/image-23.png" alt="未开启视觉计算加速，19个实例约12.394S"></p>
<p><img src="@source/PickWiz/images/image-24.png" alt="开启视觉计算加速，19个实例约2.632S"></p>
<p><img src="@source/PickWiz/images/image-25.png" alt="标配工控机Benchmark（识别实例越多，加速模式的优势越大）"></p>
</li>
<li>
<p>通用工件场景</p>
<p><img src="@source/PickWiz/images/img_v3_02lo_cdd4c69a-68c5-4ce7-82db-b755ee63ae0g.jpg" alt="开启视觉计算加速"></p>
<p><img src="@source/PickWiz/images/image-28.png" alt="未开启视觉计算加速"></p>
<p><img src="@source/PickWiz/images/image-29.png" alt="仅参考：实例数为1,42,72 (Win11,显卡3060,内存16G,CPU: i5-11500)"></p>
</li>
<li>
<p>圆面场景</p>
<p><img src="@source/PickWiz/images/img_v3_02me_5e046710-0857-4cf0-966b-c7e3bcac9a0g.jpg" alt="未开启视觉计算加速，55个实例约20.5S"></p>
<p><img src="@source/PickWiz/images/img_v3_02me_f46519fc-2a6b-4eac-a2d8-a434dc2ea41g.jpg" alt="开启视觉计算加速，55个实例约6.4S，速度提升约三倍"></p>
<p><img src="@source/PickWiz/images/image-30.png" alt="标准工控机配置：3050/6G i7-8700/16G"></p>
</li>
<li>
<p>拆垛场景</p>
<p><img src="@source/PickWiz/images/image-31.png" alt="未开启视觉计算加速，80个实例约26S"></p>
<p><img src="@source/PickWiz/images/image-32.png" alt="开启视觉计算加速，80个实例约5S"></p>
</li>
</ul>
<blockquote>
<ol>
<li>
<p>暂不支持插件场景（识别类型/局部特征/正反），后续会逐步向其他场景集成。</p>
</li>
<li>
<p>视觉计算加速模式下，不支持使用以下配置：避免重复抓取同一工件、同一工件最大抓取次数、位姿计算个数、位姿计算异常报警、是否高频切换作业；且可视化的“过滤所有2D实例”配置不生效。</p>
</li>
</ol>
</blockquote>
</li>
<li>
<p>视觉计算配置界面由平铺风格统一为标签分类，拆分为“数据与存储配置”和“抓取逻辑设置”两个标签。</p>
<p><img src="@source/PickWiz/images/image-33.png" alt=""></p>
</li>
</ol>
<h2 id="_7-历史数据" tabindex="-1"><a class="header-anchor" href="#_7-历史数据"><span>7. 历史数据</span></a></h2>
<ol>
<li>
<p>支持仅运行计算2D识别获取模型分割结果，无需运行全流程（耗时长）再查看。</p>
<p><strong>功能说明</strong></p>
<p>用于查看2D识别 - 实例过滤节点的输出结果，适用于仅查看模型分割的效果。</p>
<p><strong>使用说明</strong></p>
<p>在视觉计算配置中，“输入数据”选择“历史数据”后，可选择“运行方式”，在“运行方式”下选择“仅运行2D识别结果”即可；且支持批量运行历史数据查看仅2D识别结果。</p>
<p><img src="@source/PickWiz/images/image-34.png" alt=""></p>
</li>
<li>
<p>当设置了“只保存原始图像（极速模式）”时，支持在历史数据模块中，鼠标右键&quot;生成点云数据&quot;，系统会基于原始数据生成点云，并保存在对应数据目录。</p>
<blockquote>
<p>解决的问题：极速模式下无点云数据，无法进行ROI调整，或点云模板需要调整，特别是相机被占用时无法获取相机数据的情况。</p>
</blockquote>
<p><img src="@source/PickWiz/images/image-35.png" alt="极速模式默认无保存点云"></p>
<p><img src="@source/PickWiz/images/image-36.png" alt="“生成点云数据”后，可生成&amp;保存点云"></p>
</li>
</ol>
<h2 id="_8-工件" tabindex="-1"><a class="header-anchor" href="#_8-工件"><span>8. 工件</span></a></h2>
<ol>
<li>
<p>多个场景下，新增影子模式训练模块，具体使用流程见：<a href="https://dexforce.feishu.cn/wiki/HUlUw9zmViZGkukQXw2cmDxEnTd" target="_blank" rel="noopener noreferrer"> 如何使用工件影子模式</a></p>
<blockquote>
<p>该版本支持 <strong>通用圆柱、通用圆面、通用四边形、拆垛场景</strong>，剩余场景则逐版本集成。</p>
</blockquote>
<p><img src="@source/PickWiz/images/image-37.png" alt=""></p>
</li>
<li>
<p>圆柱场景下，抓取点的设置支持“从端点开始，根据先验尺寸估计出圆柱中心”。</p>
<blockquote>
<p>旧版名称“圆心”优化为“在中间位置估计出圆柱中心”，描述更加完整且直观。</p>
</blockquote>
<p><img src="@source/PickWiz/images/image-38.png" alt=""></p>
<p><strong>适用场景</strong></p>
<ol>
<li>
<p>在中间位置估计出圆柱中心：（默认值）适用于无先验尺寸/大小头工件的场景，在圆柱工件实例中间位置拟合出圆柱中心（无需先验尺寸），并基于此位置拟合出圆柱表面的抓取点。</p>
</li>
<li>
<p>从端点开始，根据先验尺寸估计出圆柱中心：适用于存在两/多个已知尺寸的圆柱工件实例有粘连的情况，通过尺寸估计出粘连实例中，某一端工件的中心位置，并基于此位置拟合出圆柱表面的抓取点；</p>
<blockquote>
<p><strong>参考案例说明</strong></p>
<p>针对下图，若默认在中间位置估计圆柱中心，则会出现抓取点生成在错误位置。</p>
<p><img src="@source/PickWiz/images/image-39.png" alt=""></p>
<p>故需要选择从端点开始，根据先验尺寸估计出圆柱中心，则可以合理的避免以上情况。</p>
<p><img src="@source/PickWiz/images/image-40.png" alt=""></p>
</blockquote>
</li>
</ol>
<blockquote>
<p><strong>注意</strong></p>
<p>在机器人通信时，传入工件先验尺寸 或 软件设置先验尺寸数值不为0时，该配置可生效；反之，数值为0时，系统默认在工件中间位置估计出圆柱中心。</p>
</blockquote>
</li>
<li>
<p>假面模式新增“纹理多样性”配置，支持选择 “仅包含单一假面纹理” 或 “包含多种假面纹理”，用于区分单种 或 多种纹理的训练。</p>
<p><img src="@source/PickWiz/images/image-41.png" alt=""></p>
<p><img src="@source/PickWiz/images/img_v3_02mt_b09a985e-c2b9-4485-ba95-8666d7e9b06g.jpg" alt="仅包含单一假面纹理"></p>
<p><img src="@source/PickWiz/images/image-42.png" alt="包含多种假面纹理"></p>
<p><strong>功能说明</strong></p>
<p>训练前选择对应的纹理多样性配置即可，保证每个图像的每种纹理都新增2-3个或以上的样本量，有助于保证假面训练的效果。</p>
<blockquote>
<p><strong>注意</strong></p>
<p>单一纹理迭代的模型，在兼容多种纹理的模型下是不适用的。</p>
</blockquote>
</li>
<li>
<p>假面模式支持一键删除所有纹理样本。</p>
<blockquote>
<p>解决的问题：批量导入多份错误数据后，需要一个个删除，影响效率。</p>
</blockquote>
</li>
<li>
<p>“基于四边形有序上下料”场景下，新增“工件几何形状”属性，可选择矩形或非矩形（梯形耐火砖场景为例）。</p>
<blockquote>
<p>该场景名称由“基于四边形(仅矩形)有序上下料”重命名为“基于四边形有序上下料”。</p>
<p><img src="@source/PickWiz/images/image-43.png" alt=""></p>
</blockquote>
<p><strong>功能说明</strong></p>
<p>“工件几何形状”支持切换工件现状来切换视觉算法，更好地适配不同形状的四边形工件的识别计算，提高类似耐火砖项目的交付效率；同时，提供<a href="https://dexforce.feishu.cn/wiki/Uv4owNrpfiVbWWk7oUKcnb0cnzJ?from=from_copylink" target="_blank" rel="noopener noreferrer"> 耐火砖场景交付调试流程说明</a>，帮助你更好上手类似耐火砖项目的交付工作。</p>
</li>
<li>
<p>“识别正反”场景中，支持点云模板与抓取点编辑联动，即 显示正在编辑的抓取点对应面的点云模板。</p>
<p><a href="files/20250414_152757.mp4">20250414_152757.mp4</a></p>
</li>
<li>
<p>通用工件场景中，支持在导入点云文件/关键点文件时，自动校验与网格文件的坐标中心是否对齐。</p>
<p><img src="@source/PickWiz/images/image-44.png" alt=""></p>
</li>
</ol>
<h2 id="_9-场景物体" tabindex="-1"><a class="header-anchor" href="#_9-场景物体"><span>9. 场景物体</span></a></h2>
<ol>
<li>
<p>支持录入多种尺寸的料框，系统会根据尺寸自动识别和匹配来料料框，具体见：<a href="https://dexforce.feishu.cn/wiki/MYTmwgFoCiNhV0kNsQHcMeaHn2d?from=from_copylink" target="_blank" rel="noopener noreferrer"> 场景物体使用指南</a>。</p>
<p><strong>适用场景</strong></p>
<p>多种料框尺寸（但尺寸类型有限种），且来料尺寸随机不固定。</p>
<p><img src="@source/PickWiz/images/img_v3_02io_4ab663f7-629e-4e31-8bc0-8d06806d4b3g.jpg" alt=""></p>
<p><img src="@source/PickWiz/images/img_v3_02io_50664f78-4239-48be-b5df-de2bccb3973g.jpg" alt=""></p>
<p><img src="@source/PickWiz/images/img_v3_02io_70a33449-384e-47a3-b9b7-e08ff730c48g.jpg" alt=""></p>
<p><img src="@source/PickWiz/images/img_v3_02ht_5c0f81f7-445d-4dfe-8fac-57185234684g.jpg" alt=""></p>
</li>
</ol>
<h2 id="_10-手眼标定" tabindex="-1"><a class="header-anchor" href="#_10-手眼标定"><span>10. 手眼标定</span></a></h2>
<ol>
<li>
<p>支持“随机姿态自动采样”，具体使用流程见：<a href="https://dexforce.feishu.cn/wiki/SguvwWhq3ipOOJkpLcHcWn7fn8f" target="_blank" rel="noopener noreferrer"> 随机姿态自动采样</a></p>
<blockquote>
<p>暂不支持三四轴机器人。</p>
<p>注意：由于三四轴机器人进行随机姿态采样/随机姿态自动采样时使用比较复杂，需要进行一次戳点，建议三四轴机器人使用戳点标定。</p>
</blockquote>
</li>
<li>
<p>支持使用最新相机参数重新计算手眼标定结果。</p>
<p><strong>功能说明</strong></p>
<p>选中的相机重新校正内外参后，支持使用校正后的新相机内外参，直接对该相机关联的手眼标定样本进行重新计算，无需重新采集样本后再计算。</p>
<p><strong>使用说明</strong></p>
<p>点击进入相机关联的手眼标定配置，（若检测到重新校正的相机内外参）系统会弹窗提示，你可选择覆盖旧参数并重新计算，或 不覆盖保持当前标定精度。</p>
<p><img src="@source/PickWiz/images/image-45.png" alt=""></p>
</li>
<li>
<p>在标定通信过程中，支持缓存一份机器人姿态数据，在下一次更新缓存的姿态数据前，系统都会使用缓存数据作为<code v-pre>新增样本</code>。</p>
<blockquote>
<p>解决的问题：部分现场可能存在机器人通信程序无法循环响应PickWiz请求的逻辑，PickWiz多次循环发送“获取坐标”的请求时，无法正常获取机器人姿态数据，从而无法<code v-pre>新增样本</code>。</p>
</blockquote>
</li>
</ol>
<h2 id="_11-视觉参数" tabindex="-1"><a class="header-anchor" href="#_11-视觉参数"><span>11. 视觉参数</span></a></h2>
<ol>
<li>
<p>新增了“<a href="https://dexforce.feishu.cn/wiki/P8bQwrsE0i3aACkTyJac8lfVnYc#share-XusMd7uidoikQXx3Babc24OlnIx" target="_blank" rel="noopener noreferrer">空ROI判断</a>”节点，适用于判断ROI 3D内是否还有工件。</p>
<p><img src="@source/PickWiz/images/image-46.png" alt=""></p>
</li>
<li>
<p>碰撞检测场景新增可选函数，“保留料框ROI区域内点云（工件点云处理）”。</p>
<p><strong>功能说明</strong></p>
<p>具体见：<a href="https://dexforce.feishu.cn/wiki/XfYawGN6livINGkmcoycCvB1n2d?open_in_browser=true#share-MEz8dwQf0oPzXHxvngPcVK8VnPe" target="_blank" rel="noopener noreferrer"> 碰撞检测使用指南</a></p>
<p><strong>适用场景</strong></p>
<p>适用于料框壁上映射的物料影子被误识别的场景，可添加函数过滤掉误识别的实例。</p>
<p><img src="@source/PickWiz/images/image-47.png" alt=""></p>
<blockquote>
<p>保留料框ROI区域内点云后，过程数据是只能通过历史数据访问，前端显示在后续版本增加</p>
</blockquote>
<p><img src="@source/PickWiz/images/img_v3_02o0_7780c8ee-7a50-4f81-bbfe-d92f50116d4g.jpg" alt=""></p>
</li>
<li>
<p>2D处理-实例过滤中</p>
<ol>
<li>
<p>新增“基于三通道颜色过滤”。</p>
<p><img src="@source/PickWiz/images/img_v3_02me_e9785223-30f2-423c-989f-9b8acfea5a7g.jpg" alt=""></p>
<p><strong>功能说明</strong></p>
<p>可通过三通道颜色阈值（HSV或者RGB）过滤掉实例。</p>
<p><strong>适用场景</strong></p>
<p>错误实例和正确实例颜色有明显区分的情况 ，参考下图。</p>
<p><img src="@source/PickWiz/images/image-48.png" alt=""></p>
</li>
<li>
<p>麻袋拆垛场景下，新增“基于点云数量过滤实例”。</p>
<p><img src="@source/PickWiz/images/image-56.png" alt=""></p>
<p><strong>功能说明</strong></p>
<p>根据检测出实例的点云数量来进行过滤。</p>
<p><strong>适用场景</strong></p>
<p>适用于成像曝光或其他原因，导致实例区域点云过少/噪点过多的情况。</p>
</li>
</ol>
</li>
<li>
<p>面型场景下，新增3D计算-预处理函数 “点云降采样（工件点云）”。</p>
<p><strong>功能说明</strong></p>
<p>可对进行精匹配的场景点云进行降采样（有别于粗匹配），建议在使用时，新增且上移至预处理函数的最上方。</p>
<p><strong>适用场景</strong></p>
<p>使用精匹配，但耗时高且不满足整体节拍的场景。</p>
<blockquote>
<p><strong>调参建议</strong></p>
<p>运行后可将工件模块中的点云模版，更新为历史数据中，点云降采样后的工件点云，这一步一定程度可减少粗匹配的耗时。</p>
</blockquote>
<blockquote>
<p>其他节拍提升的操作见：<a href="https://dexforce.feishu.cn/wiki/ExRIwWq7NiCsMQkRljNcB3XynDb" target="_blank" rel="noopener noreferrer"> 节拍异常的常见场景与解决方案</a></p>
</blockquote>
</li>
<li>
<p>面型工件上下料（物料相互孤立）场景下，实例分割3D节点新增了“点云生成”函数。</p>
<p><strong>功能说明</strong></p>
<p>点击选择 实例分割3D - 实例点云生成形式 的配置控件即可触发函数生效，具体见：<a href="https://dexforce.feishu.cn/wiki/DzbhwEHIDi4GVlkIoDTcX2XLnlf#share-FK1JdjJqTouhhRxi08Ecukkon32" target="_blank" rel="noopener noreferrer"> 面型工件上下料（物料相互孤立）视觉参数调整指南</a></p>
<blockquote>
<p><strong>注意</strong></p>
<p>新增视觉参数配置时，该配置默认为不生效，只有手动选择才可触发，该机制可能存在风险<a href="https://dexforce.feishu.cn/wiki/XLYtwQ06niOXmykKCS3coFfPnwh#share-YNSYdEjbIoixlpxcEHecajHgnlh" target="_blank" rel="noopener noreferrer">已知问题</a>，后续版本进行优化。</p>
</blockquote>
<p><img src="@source/PickWiz/images/image-59.png" alt=""></p>
<p><strong>适用场景</strong></p>
<ol>
<li>
<p>预处理为了过滤噪声删除了原始点云，但3D计算的姿态估计节点需要完整点云时，可使用“点云生成”；</p>
<p><img src="@source/PickWiz/images/img_v3_02o9_775aa6d6-3731-4c7c-b91a-cf639d07d7cg.jpg" alt="增加点云生成前"></p>
<p><img src="@source/PickWiz/images/img_v3_02o9_b5438e9a-34f5-4749-bca1-1ec7f3df7f9g.jpg" alt="增加点云生成后"></p>
</li>
<li>
<p>当场景中的实例存在不连续（如分成两簇点云），可通过“点云生成”，扩大包围盒比例以提取完整但是点云分离的实例。</p>
<p><img src="@source/PickWiz/images/image-57.png" alt=""></p>
<p><img src="@source/PickWiz/images/image-55.png" alt=""></p>
</li>
</ol>
</li>
<li>
<p>圆柱场景中，3D计算 - 姿态估计节点下新增了 “圆柱姿态标准化”函数。</p>
<p><img src="@source/PickWiz/images/image-58.png" alt=""></p>
<p><strong>功能说明</strong></p>
<p>基于有效内点在轴线方向的投影定义最优抓取的方向，（圆柱一般会按照旋转间隔生成多个抓取点在表面）即生成的抓取点中，必有一个是朝向相机原点，也是抓取成功率较高的一个方向。</p>
<blockquote>
<p><strong>解决的问题</strong></p>
<ol>
<li>
<p>旧版本中，系统可能会在圆柱表面随机分布抓取点的生成角度，部分情况会导致生成的抓取点Z轴朝向倾斜过多。</p>
<p><img src="@source/PickWiz/images/img_v3_02on_e661bf4f-e8d1-4fb4-a79b-53d6d68897dg.jpg" alt=""></p>
</li>
<li>
<p>圆柱上生成抓取点过多，导致的函数耗时过长。</p>
</li>
</ol>
</blockquote>
</li>
<li>
<p>抓取点过滤中</p>
<ol>
<li>
<p>“过滤工件与夹具存在碰撞的抓取点”函数新增了参数 “碰撞点云采样（m）”。</p>
<p><strong>功能说明</strong></p>
<p>具体见：<a href="https://dexforce.feishu.cn/wiki/M6VWwX00jiXSjpkZc3UcBqE5nVf#share-IK52dco0No6SktxYzgncMAQXnSd" target="_blank" rel="noopener noreferrer"> 通用工件视觉参数调整指南</a></p>
<p><strong>适用场景</strong></p>
<p>使用该函数时，可对工件场景点云降采样，减少一定耗时。</p>
<p><img src="@source/PickWiz/images/image-52.png" alt=""></p>
<blockquote>
<p><strong>调试建议</strong></p>
<ol>
<li>
<p>降采样后，检测区域内的点云数量会降低，故碰撞阈值需要搭配降采样一起调整。</p>
</li>
<li>
<p>防止降采样程度过大，可能会导致过滤失效。</p>
</li>
</ol>
</blockquote>
</li>
<li>
<p>新增“判断抓取点上层遮挡”。</p>
<p><img src="@source/PickWiz/images/img_v3_02me_f437f52c-1b9c-4066-9dda-205a163ade3g.jpg" alt=""></p>
<p><strong>功能说明</strong></p>
<p>可判断抓取工件的z方向上是否存在点云，当点云数量超过阈值时，会将该抓取点过滤。</p>
<p><strong>适用场景</strong></p>
<p>模型识别时会识别到下层工件，且要求一层一层抓取工件的情况，常见于拆垛/有序场景。</p>
</li>
</ol>
</li>
<li>
<p>抓取点调整中</p>
<ol>
<li>
<p>“对称中心姿态估计”函数中，新增 “姿态调整类型” 参数配置。</p>
<p><img src="@source/PickWiz/images/image-54.png" alt=""></p>
<p><strong>参数说明</strong></p>
<p>姿态调整类型包含三种选项：</p>
<ol>
<li>
<p>默认调整姿态：默认选中，使用对称中心进行计算，使输入姿态旋转和平移；适用于大部分情况。</p>
</li>
<li>
<p>仅优化平移姿态：使用输入的抓取姿态的旋转量，结合对称中心进行姿态的平移；适用于输入抓取姿态的旋转更稳定，对称中心的平移更稳定的情况。</p>
</li>
<li>
<p>仅优化旋转姿态：使用输入的抓取姿态的平移量，结合对称中心进行姿态的旋转；适用于输入抓取姿态的平移更稳定，对称中心的旋转更稳定的情况。</p>
</li>
</ol>
<blockquote>
<p>姿态的稳定性指的是 实例掩膜/包围盒波动比较小/可忽略，故抓取姿态的平移/旋转不存在异常偏移。可通过 “重复定位精度” 查看平移和旋转的极值大小，判定姿态的稳定程度，平移量的误差更大，即平移稳定性低，旋转量同理。</p>
</blockquote>
<p>具体函数/参数的说明和使用见：<a href="https://dexforce.feishu.cn/wiki/YQP1wSDs1iq7UnkUKvscZrgFnpd?from=from_copylink" target="_blank" rel="noopener noreferrer"> 对称中心姿态优化函数说明文档</a>。</p>
</li>
<li>
<p>“调整姿态轴对齐roi中心”函数新增“指向roi中心”参数。</p>
<p><strong>功能说明</strong></p>
<p>勾选“指向roi中心”，视觉输出的姿态指定轴强制指向roi的中心（如下图设置，Z轴作为不变轴，保证抓取姿态的XY面不变，旋转姿态X轴指向ROI中心轴。）</p>
<p><strong>适用场景</strong></p>
<p>常用于使用异形夹具的场景，且需要固定/旋转抓取角度，去防止夹具凸起部分与场景物体/料框碰撞的风险。</p>
<p><img src="@source/PickWiz/images/image-53.png" alt=""></p>
</li>
</ol>
</li>
<li>
<p>新增了 抓取点排序相关策略：</p>
<ol>
<li>
<p>实例排序</p>
<ol>
<li>
<p>掩膜面积从大到小/从小到大</p>
</li>
<li>
<p>可见度从大到小/从小到大</p>
</li>
<li>
<p>从X/Y坐标的中间到两侧/两侧到中间</p>
</li>
<li>
<p>从包围盒X/Y坐标的中间到两侧/两侧到中间</p>
</li>
</ol>
</li>
<li>
<p>抓取点排序</p>
<ol>
<li>
<p>纸箱单拆场景中，新增了“纸箱组合策略”，具体说明见：<a href="https://dexforce.feishu.cn/wiki/HW1nw5cq2iUcVvkyynBcIHe2nig#share-R1h2daKTpop1ydxp6jLc9NrPnNc" target="_blank" rel="noopener noreferrer"> 拆垛视觉参数调整指南</a>。</p>
<p><img src="@source/PickWiz/images/image-50.png" alt="同姿态方向纸箱可合并；间隔较远的纸箱可限制，不作合并。"></p>
</li>
<li>
<p>抓取点X/Y/Z坐标值从大到小/从小到大</p>
</li>
<li>
<p>从抓取点X/Y坐标轴向的中间到两侧/两侧到中间</p>
</li>
<li>
<p>从工件姿态X/Y坐标中间到两侧/两侧到中间</p>
</li>
</ol>
</li>
</ol>
</li>
</ol>
<h2 id="_12-可视化" tabindex="-1"><a class="header-anchor" href="#_12-可视化"><span>12. 可视化</span></a></h2>
<ol>
<li>
<p>支持点云测距，可用于测量工件尺寸或点间距等。</p>
<p><img src="@source/PickWiz/images/image-49.png" alt=""></p>
<p><a href="files/20250423100916_rec_.mp4">20250423100916_rec_.mp4</a></p>
</li>
<li>
<p>圆柱场景下，显示工件模板为圆柱网格模型，更直观地对比点云的圆柱形态。</p>
<p><img src="@source/PickWiz/images/image-51.png" alt=""></p>
</li>
<li>
<p>支持通过设置“视觉计算配置”中的“发送抓取点个数”，去过滤可视化界面中的抓取点数量的可视化信息。</p>
<p><img src="@source/PickWiz/images/img_v3_02lj_fe005fc7-ac57-4ddf-9dc5-f4d090b17aag.jpg" alt="发送抓取点个数=1"></p>
<p><img src="@source/PickWiz/images/img_v3_02lj_898c2cee-d131-4df1-aa6e-beadd9440ffg.jpg" alt="发送抓取点个数=2"></p>
<blockquote>
<p>解决的问题：旧版本可视化会默认显示全部，无法仅显示一个最终抓取姿态，影响查看。</p>
</blockquote>
</li>
<li>
<p>选中单个工件后，可视化模块支持显示/隐藏坐标器，帮助查看单个工件的抓取姿态。</p>
<p><img src="@source/PickWiz/images/image-68.png" alt=""></p>
</li>
<li>
<p>支持保存可视化显示配置的状态，即关闭软件再次启动软件时，仍会按上一次的可视化显示配置，来显示可视化视窗内的数据内容。</p>
</li>
</ol>
<h2 id="_13-其他" tabindex="-1"><a class="header-anchor" href="#_13-其他"><span>13. 其他</span></a></h2>
<ol>
<li>
<p>基于四边形有序上下料场景中，支持了并行化模式，可提高算法计算速度。</p>
<blockquote>
<p>如有需要，需要提项目支持单至研发处理。</p>
</blockquote>
</li>
<li>
<p>若 PickWiz 手眼标定采集的样本相似度较高，且弹出报错“与原样本相似度较高”，可通过 frozen json 配置文件取消标定样本相似度校验功能，具体使用流程见：<a href="https://dexforce.feishu.cn/wiki/HlzFw2aS2iNEpkkQXhhcvzzqn7f" target="_blank" rel="noopener noreferrer"> 取消标定样本相似度校验</a>。</p>
</li>
<li>
<p>支持在后台文件夹（路径为：.../dex/.dexforce/log/mixedai）下查看MixedAI相关日志，主要用于查看模型训练过程中输出的日志信息。</p>
<p><img src="@source/PickWiz/images/image-69.png" alt=""></p>
</li>
<li>
<p>当前支持外网下载所有版本的DexSense相机GUI，获取地址：<a href="http://cloud.open3dv.site:8087/nas/dexsense_release/" target="_blank" rel="noopener noreferrer">Index of /nas/dexsense_release</a></p>
</li>
</ol>
<h1 id="功能优化" tabindex="-1"><a class="header-anchor" href="#功能优化"><span>功能优化</span></a></h1>
<h2 id="_1-欢迎页-1" tabindex="-1"><a class="header-anchor" href="#_1-欢迎页-1"><span>1. 欢迎页</span></a></h2>
<ol>
<li>
<p>优化了 欢迎页的界面和交互，更简洁易用，主要包括以下：</p>
<p><a href="files/%E6%AC%A2%E8%BF%8E%E9%A1%B5%E5%8A%9F%E8%83%BD%E4%BC%98%E5%8C%96.mp4">欢迎页功能优化.mp4</a></p>
<ol>
<li>
<p>新建空项目/案例库以标签页方式显示。</p>
</li>
<li>
<p>案例库新建时可生成默认项目名称和路径。</p>
</li>
<li>
<p>支持一键打开文档中心。</p>
</li>
<li>
<p>注释模块新增了更清晰的描述和图像说明。</p>
</li>
</ol>
</li>
<li>
<p>删除了 功能选项 - 碰撞检测（待废弃）。</p>
<p><img src="@source/PickWiz/images/image-67.png" alt="该插件能力不足，本版本彻底废弃"></p>
</li>
</ol>
<h2 id="_2-菜单-1" tabindex="-1"><a class="header-anchor" href="#_2-菜单-1"><span>2. 菜单</span></a></h2>
<ol>
<li>
<p>优化了点云模版制作的文件导出流程，支持一键导出并传入到工件模块对应配置中，无需手动一一查找上传。</p>
<p><img src="@source/PickWiz/images/image-66.png" alt=""></p>
<p><a href="files/20250605_111155.mp4">20250605_111155.mp4</a></p>
<p>示例：正反场景下使用流程</p>
</li>
<li>
<p>优化了 英文版 PickWiz。</p>
<ol>
<li>
<p>剩余中文内容已作英文化。</p>
</li>
<li>
<p>切换语言时，可点击<code v-pre> 重启软件 </code>直接重启，无需再次点击软件图标开启。</p>
<p><img src="@source/PickWiz/images/image-65.png" alt=""></p>
</li>
</ol>
</li>
</ol>
<h2 id="_3-相机-1" tabindex="-1"><a class="header-anchor" href="#_3-相机-1"><span>3. 相机</span></a></h2>
<ol>
<li>
<p>优化了 KINGFISHER相机相关功能</p>
<ol>
<li>
<p>（以本次发版时间为准）后续出厂的KINGFISHER相机，内外参标定文件将自动写入相机硬件中，无需在飞书资料中寻找和手动导入。</p>
<p><img src="@source/PickWiz/images/image-64.png" alt="连接上相机后，可默认显示一份内外参文件配置"></p>
</li>
<li>
<p>相机出厂前，会进行左右目对应SN码的标注（由相机研发人员进行设置），且连接过程中，只选中其中一目IP，系统会根据相机出厂备注进行解析，自动选中另一目相机IP。</p>
<p><img src="@source/PickWiz/images/image-72.png" alt=""></p>
</li>
<li>
<p>优化了相机连接配置的使用流程，具体如下：</p>
<ol>
<li>
<p>无配置时，界面隐藏<code v-pre> 触发拍照 </code>、<code v-pre> 保存图片 </code>和“成像模型影子模式”模块。</p>
<ol>
<li>
<p>配置框通过占位提示“请新增相机配置”，点击<code v-pre> +新增相机配置 </code>后显示新增的配置名称。</p>
<p><img src="@source/PickWiz/images/image-71.png" alt="无相机配置时"></p>
<p><img src="@source/PickWiz/images/image-70.png" alt="新增相机配置后"></p>
</li>
</ol>
</li>
<li>
<p>优化了默认相机配置名：“双目配置_x”更改为“KINGFISHER相机配置_x”。</p>
</li>
<li>
<p>“内外参配置”支持右键<code v-pre>打开文件所在目录</code>。</p>
</li>
</ol>
</li>
<li>
<p>KINGFISHER相机参数界面中</p>
<ul>
<li>
<p>“理论帧率”和“白平衡比”参数支持每次取图实时更新，并在关闭相关模式（使用采集帧率作为理论帧率/关闭“自动白平衡”）后，保存和显示最新更新的数值。</p>
<p><img src="@source/PickWiz/images/image-63.png" alt=""></p>
</li>
</ul>
</li>
<li>
<p>新增了 KINGFISHER相机连接和取图时的日志提示。</p>
</li>
<li>
<p>KINGFISHER左右目点云一致，故合并了3D点云的显示视窗。</p>
</li>
</ol>
</li>
<li>
<p>优化了 所有相机的模版参数，在常见的项目场景中，模板参数的成像点云更全，且耗时更短。</p>
</li>
</ol>
<h2 id="_4-机器人-1" tabindex="-1"><a class="header-anchor" href="#_4-机器人-1"><span>4. 机器人</span></a></h2>
<ol>
<li>
<p>优化了 机器人通信输出抓取点ID的逻辑，保证和工件界面的抓取点ID保持一致。</p>
<p><img src="@source/PickWiz/images/image-60.png" alt=""></p>
<p><img src="@source/PickWiz/images/image-62.png" alt=""></p>
<blockquote>
<p><strong>解决的问题：</strong>旧版本中，机器人输出的抓取点ID与工件界面中的抓取点ID不一致（以选中抓取点由上至下的顺序为索引ID），导致用户理解和实际使用存在抓取点ID映射错位的情况。</p>
</blockquote>
<blockquote>
<p>仅在无插件、识别正反场景生效，暂不支持 识别类型、识别局部特征的场景，后续版本优化。</p>
</blockquote>
</li>
</ol>
<h2 id="_5-一键联通-1" tabindex="-1"><a class="header-anchor" href="#_5-一键联通-1"><span>5. 一键联通</span></a></h2>
<ol>
<li>
<p>模型最大识别数的上下限范围修改为1至150。</p>
<blockquote>
<p><strong>设置建议</strong></p>
<p>由于识别数量过多，有可能导致模型识别速度变慢，建议设置为视野内可观察到，同时也可抓取的实例数量。</p>
</blockquote>
<p><img src="@source/PickWiz/images/image-61.png" alt=""></p>
</li>
<li>
<p>录入来料形式中</p>
<ol>
<li>
<p>取消了快照和画布的数量上限，支持更多种类的工件类型的一键联通训练。</p>
<blockquote>
<p>解决的问题：旧版本中，快照的上限个数为6，画布为5，限制了多类场景的模型训练。</p>
</blockquote>
</li>
<li>
<p>在网格MESH可视化中，支持显示关键点和坐标轴，辅助识别CAD模型与快照正反面的关系。</p>
<p><img src="@source/PickWiz/images/image-86.png" alt=""></p>
<blockquote>
<p>解决的问题：理论上，训练使用的快照面是视野中看到的工件正面，但在旧版本中，正反同型的工件因为操作问题，容易录成背面，导致最终训练出来的模型识别不出工件正面。</p>
</blockquote>
</li>
</ol>
</li>
<li>
<p>优化了 扫描采集的CAD模型的对称性训练数据，一键联通可更好地识别出工件的对称性，提升了扫描CAD对称性数据训练的效果。</p>
<blockquote>
<p>解决的问题：一键联通训练时，针对扫描采集的CAD模型缺少合理的工件对称关系，无法计算出旋转对称后的姿态数据（某工件是对称型时，其旋转90°前后的姿态是相同的），影响模型后续使用的效果。</p>
</blockquote>
<p><strong>功能说明</strong></p>
<p>在工件模块下，配置模型数据训练数据时，勾选“对称型”，并完整配置其他训练需要的数据；点击“一键联通” 进行训练即可。</p>
</li>
</ol>
<h2 id="_6-统计" tabindex="-1"><a class="header-anchor" href="#_6-统计"><span>6. 统计</span></a></h2>
<ol>
<li>
<p>统计模块从原本独立弹窗改为一体化整体界面，以及包含部分优化，如下：</p>
<p><img src="@source/PickWiz/images/image-81.png" alt=""></p>
<ol>
<li>
<p>新增了 刷新 功能，点击后，可重置列表为初始状态；</p>
</li>
<li>
<p>新增了 作业、工件 的字段；</p>
</li>
<li>
<p>支持字段排序，鼠标悬浮在字段上即可显示和点击筛选按钮；</p>
<p><img src="@source/PickWiz/images/image-79.png" alt=""></p>
</li>
<li>
<p>优化了界面响应性适配屏幕。</p>
</li>
</ol>
</li>
</ol>
<h2 id="_7-视觉计算配置" tabindex="-1"><a class="header-anchor" href="#_7-视觉计算配置"><span>7. 视觉计算配置</span></a></h2>
<ol>
<li>
<p>优化了数据保存逻辑，支持保存更多计算过程的数据，在调试过程中，更好地帮助排查问题。</p>
<p><strong>功能说明</strong></p>
<p>在保存节点输入（input）和输出（output）数据的基础上，2D识别(InstanceBuilder)，3D计算(PoseBuilder)，抓取点处理(GraspBuilder)三个节点，还支持保存 预处理的输出数据（pre_process_output）和 部分节点中后置生效的函数的输入数据（post_process_input），过程数据的查看顺序为：input -&gt; pre_process_output -&gt; post_process_input &gt; output。</p>
<p><img src="@source/PickWiz/images/image-82.png" alt="勾选保存的节点对象后，默认保存所有过程数据"></p>
<p><img src="@source/PickWiz/images/image-80.png" alt=""></p>
<p><img src="@source/PickWiz/images/image-78.png" alt="2D识别的数据（InstanceBuilder - input）"></p>
<p><img src="@source/PickWiz/images/image-77.png" alt="2D预处理的输出（InstanceBuilder - preprocessoutput）"></p>
</li>
<li>
<p>“位姿计算个数” 取消了上限（100个）限制，避免工件数量多的场景识别不全。</p>
</li>
</ol>
<h2 id="_8-历史数据" tabindex="-1"><a class="header-anchor" href="#_8-历史数据"><span>8. 历史数据</span></a></h2>
<ol>
<li>
<p>运行（批量）选中的历史数据时，支持使用其他成像模型来重新推理生成点云，一般用于检查某一新成像模型在异常成像数据上的推理效果。</p>
<blockquote>
<p>若有相应需求，可提项目支持单，研发会及时处理。</p>
</blockquote>
</li>
<li>
<p>优化了 <strong>历史数据</strong>的运行次数上限，修改为40w次。</p>
<blockquote>
<p>解决的问题：旧版本中最高仅支持10次，无法进行场景的稳定性测试。</p>
</blockquote>
</li>
</ol>
<h2 id="_9-工件" tabindex="-1"><a class="header-anchor" href="#_9-工件"><span>9. 工件</span></a></h2>
<ol>
<li>
<p>优化了 部分控件的交互。</p>
<ol>
<li>
<p>文件上传输入框支持清空前端上传的文件；</p>
<p><img src="@source/PickWiz/images/image-75.png" alt=""></p>
</li>
<li>
<p>为了避免误操作，数值输入框不再支持鼠标悬停时直接使用滚轮修改大小，需手动点击输入框选中后，才支持鼠标滚轮滚动修改大小。</p>
<p><img src="@source/PickWiz/images/image (1).png" alt=""></p>
</li>
<li>
<p>假面模式 - 纹理录入器中的框选器</p>
<p><img src="@source/PickWiz/images/image-76.png" alt="拖拽器限定在视窗内，解决了出框无法设置的问题"></p>
<p><img src="@source/PickWiz/images/image-84.png" alt="需要选中才支持拖拽"></p>
</li>
</ol>
</li>
<li>
<p>优化了 影子/假面模型训练过程的显存清理机制：开始训练前会清理显存占用，避免影响训练过程。</p>
</li>
<li>
<p>模型训练过程优化为分阶段显示进度。</p>
<p><img src="@source/PickWiz/images/image-85.png" alt="第一阶段：准备训练数据集"></p>
<p><img src="@source/PickWiz/images/image-74.png" alt="第二阶段：模型训练的初始化准备"></p>
<p><img src="@source/PickWiz/images/image-83.png" alt="第三阶段：模型训练中"></p>
</li>
</ol>
<h2 id="_10-roi" tabindex="-1"><a class="header-anchor" href="#_10-roi"><span>10. ROI</span></a></h2>
<ol>
<li>
<p>优化了 ROI 3D的拖拽器。</p>
<ol>
<li>
<p>ROI 3D 框去掉拖拽箭头，替换成平面调整方块点，按住鼠标右键拖拽调整点即可。</p>
</li>
<li>
<p>支持降低 ROI 框外的点云透明度。</p>
</li>
<li>
<p>支持旋转时，旋转轴显示旋转角度数值。</p>
</li>
</ol>
<p><a href="files/20250711_163239.mp4">20250711_163239.mp4</a></p>
</li>
<li>
<p>支持导入点云时，默认初始化ROI 3D中心在点云的中心附近，可避免过多的拖拽操作。</p>
<blockquote>
<p><strong>解决的问题：</strong>ROI模块中，导入点云后ROI 3D会重置到相机坐标原点，需要进行多次拖拽后才可设置好ROI 3D。</p>
</blockquote>
</li>
</ol>
<h2 id="_11-末端工具" tabindex="-1"><a class="header-anchor" href="#_11-末端工具"><span>11. 末端工具</span></a></h2>
<ol>
<li>新增末端夹具时会默认选中夹具作为工具类型，无需繁琐地手动选择。</li>
</ol>
<h2 id="_12-手眼标定" tabindex="-1"><a class="header-anchor" href="#_12-手眼标定"><span>12. 手眼标定</span></a></h2>
<ol>
<li>
<p>优化了 随机姿态自动采样的部分流程步骤。</p>
<p><img src="@source/PickWiz/images/image-73.png" alt=""></p>
<ol>
<li>
<p>自动标定采样发送指令中，默认报文移除字符 ‘d,’；</p>
</li>
<li>
<p>信号值0代表 自动采样成功结束；</p>
</li>
</ol>
</li>
<li>
<p>优化了标定过程中，样本过于接近的防呆描述，区分了旋转量（红框内上者）和平移量（红框内下者）的校验。</p>
<p><img src="@source/PickWiz/images/image-101.png" alt=""></p>
</li>
<li>
<p>标定采样过程中，页面自动下拉至当前样本的检测结果栏。</p>
<blockquote>
<p>解决的问题：旧版软件固定界面显示，如果不下拉查看会忽略样本相似度的实时校验信息。</p>
</blockquote>
</li>
</ol>
<h2 id="_13-视觉参数" tabindex="-1"><a class="header-anchor" href="#_13-视觉参数"><span>13. 视觉参数</span></a></h2>
<p><a href="https://dexforce.feishu.cn/wiki/VrkKwq8gni4lQUkrRMecGGEtnHh?from=from_copylink" target="_blank" rel="noopener noreferrer"> 文档任务</a></p>
<ol>
<li>
<p>圆面/通用/面型工件场景中，“基于轴旋转的姿态调整”函数从 抓取点调整<strong> </strong>移至 姿态估计节点。</p>
<p><strong>功能说明</strong></p>
<ol>
<li>
<p>函数的所有参数含义不变，函数效果也无变化，函数说明具体见：<a href="https://dexforce.feishu.cn/wiki/Lj2AwY9H8i5PFnk4tZocxsPWnxd#share-KOiyd6ZXSoK2iExtivccqxnjnMQ" target="_blank" rel="noopener noreferrer"> 通用工件视觉参数调整指南</a></p>
</li>
<li>
<p>计算节拍相较于旧版本会更快。</p>
</li>
</ol>
<blockquote>
<p><strong>参数建议</strong></p>
<p>该函数依赖一个旋转中心进行计算，系统当前默认工件模块中设置的第一个抓取点为旋转中心。</p>
</blockquote>
<p><img src="@source/PickWiz/images/image-98.png" alt=""></p>
</li>
<li>
<p>圆柱/圆面场景中，由于功能使用率低，且<a href="https://dexforce.feishu.cn/wiki/YTu1wAW26iTvITkgEsbcvcrRnB3#share-Z3jLdqGMtoGeqYxaTVbcTmVAnnb" target="_blank" rel="noopener noreferrer">已有功能</a>可实现相同效果，故删除了原来的“圆柱姿态优化”函数。</p>
</li>
<li>
<p>优化了 <a href="https://dexforce.feishu.cn/wiki/P8bQwrsE0i3aACkTyJac8lfVnYc#share-NEdvdj0O1ovat5x60EPc74g7nse" target="_blank" rel="noopener noreferrer">过滤被遮挡工件的抓取点 </a>的设置逻辑，变化如下：</p>
<p><img src="@source/PickWiz/images/image-94.png" alt=""></p>
<ol>
<li>
<p>新增了参数 “使用ROI 3D姿态基准”。</p>
<p><strong>参数说明</strong></p>
<p>默认不勾选时代表指定轴向以ROI坐标系某一轴向为基准，勾选时则代表指定轴向以抓取姿态某一轴向为基准。后续函数将在指定轴向上一定距离处生成检测区域立方体块。</p>
</li>
<li>
<p>在抓取点某一轴向一定距离处，生成一个立方体作为检测区域，更加直观。</p>
<p><img src="@source/PickWiz/images/image-100.png" alt=""></p>
<p><img src="@source/PickWiz/images/image-95.png" alt=""></p>
<blockquote>
<p><strong>原逻辑</strong></p>
</blockquote>
</li>
<li>
<p>后台文件中保存了生成的立方体可视化数据，有助于调试过程查看。</p>
</li>
</ol>
</li>
<li>
<p>统一了 视觉参数单位为mm，包含函数参数、运行日志等，更符合行业规范。</p>
</li>
<li>
<p>优化了 边缘增强 函数的计算速度，提升了约 70%。</p>
<p><img src="@source/PickWiz/images/image-92.png" alt="1.8版本"></p>
<p><img src="@source/PickWiz/images/image-99.png" alt="旧版本"></p>
</li>
<li>
<p>优化了 多个函数的名称和描述，更易于理解。</p>
</li>
<li>
<p>针对有较小使用需求但使用难度大的函数，标注了前缀【大师】。</p>
</li>
<li>
<p>优化了 自动增强 函数的逻辑：无需进行手动配置自动增强 - 模型预测包围盒类型，系统可自动选择对应的包围盒类型；并隐藏了该参数：自动增强 - 模型预测包围盒类型。 </p>
<p><img src="@source/PickWiz/images/image-91.png" alt=""></p>
</li>
</ol>
<h2 id="_14-日志" tabindex="-1"><a class="header-anchor" href="#_14-日志"><span>14. 日志</span></a></h2>
<ol>
<li>
<p>优化了 匹配过程点云数量过大的日志信息，日志后半段描述明确了待调整函数和调整方式。</p>
<p><img src="@source/PickWiz/images/image-90.png" alt=""></p>
</li>
<li>
<p>优化了视觉状态码的日志描述。</p>
<p><img src="@source/PickWiz/images/image-93.png" alt=""></p>
</li>
<li>
<p>优化了日志的功能和显示，便于更好地查看日志和排查。</p>
<p><a href="files/20250606_160438.mp4">20250606_160438.mp4</a></p>
<ol>
<li>
<p>删除了用户等级筛选器，仅保留单一的日志等级筛选维度（ERROR、WARNING、INFO、DEBUG），以此提高筛选功能的易用性。</p>
</li>
<li>
<p>新增了日志标注，针对节点名称、重要运行结果、函数名、时间等对象进行字体加粗，针对不同等级日志进行颜色标记。</p>
</li>
<li>
<p>优化了部分日志描述，以及对部分英文日志进行中文化。</p>
<p><img src="@source/PickWiz/images/image-97.png" alt=""></p>
</li>
</ol>
</li>
</ol>
<h2 id="_15-安装" tabindex="-1"><a class="header-anchor" href="#_15-安装"><span>15. 安装</span></a></h2>
<ol>
<li>
<p>优化了 软件<strong>安装</strong>流程，减少了安装步骤。</p>
<blockquote>
<p>软件需要的基础环境执行静默安装，无需再手动安装，具体安装流程见：<a href="https://dexforce.feishu.cn/wiki/YDlywbiKjixL1ikXvTBcxiVHnsg" target="_blank" rel="noopener noreferrer"> 安装指南</a></p>
</blockquote>
</li>
<li>
<p>软件安装/开启时，若未检测到显卡会报错，如下：</p>
<p><img src="@source/PickWiz/images/image-89.png" alt="安装时报错"></p>
<p><img src="@source/PickWiz/images/image-87.png" alt="开启软件时报错"></p>
</li>
</ol>
<h2 id="_16-其他" tabindex="-1"><a class="header-anchor" href="#_16-其他"><span>16. 其他</span></a></h2>
<ol>
<li>
<p>优化了软件系统的相关性能：</p>
<ol>
<li>
<p>优化了 麻袋拆垛场景的节拍，减少了额外无作用的矩形拟合算法带来的无效耗时。</p>
<p><img src="@source/PickWiz/images/image-88.png" alt="优化后，极速模式下6个物料耗时1.26s"></p>
<p><img src="@source/PickWiz/images/image-96.png" alt="优化前，极速模式下6个物料耗时1.45s"></p>
</li>
<li>
<p>优化了 数据回传效率，避免占用过多流量。</p>
</li>
<li>
<p>优化了 可视化模块3D显示渲染的方式，减少了耗时，避免操作卡顿，以及提高了2D图显示的清晰度。</p>
</li>
<li>
<p>持续优化了 使用“对称中心姿态优化”函数在部分场景下占用显存过多，导致耗时过久或显存不足的情况。</p>
</li>
<li>
<p>相较 PickWiz 1.7版本，该版本的标定模块查看样本时加载样本的速度提升约100%。</p>
</li>
<li>
<p>优化了 使用“对称中心姿态优化”函数在部分场景下占用显存过多，导致耗时过久或显存不足的情况。</p>
</li>
<li>
<p>减少了 KINGFISHER相机 高动态模式下仅取图的耗时，高分辨率相机提升约60%，低分辨率相机提升约35%；优化后伴随相机配置模板参数的微调。</p>
<p><img src="@source/PickWiz/images/image-111.png" alt="取图耗时对比（仅参考）"></p>
</li>
</ol>
</li>
<li>
<p>优化了“斜率校正”的函数逻辑，针对工件非对称排列的来料不再出现倾斜排序的情况，且无需再手动修改JSON来关闭函数（参考：<a href="https://dexforce.feishu.cn/wiki/US4YwdUKtijpXakHj5EcuA6ynFf#share-ZpHvdlCTGouBX1xs8Vhce4YKnNg" target="_blank" rel="noopener noreferrer"> PickWiz 1.7.2 更新说明</a>）</p>
<p><img src="@source/PickWiz/images/img_v3_02na_aa49501a-494a-46b4-900f-1869f1af3d0g.jpg" alt="图中为旧逻辑不兼容的数据，173优化后，抓取点可正常按照X坐标排序"></p>
</li>
<li>
<p>优化了 部分异常防呆</p>
<ul>
<li>
<p>视觉参数配置异常时的防呆。</p>
<p><img src="@source/PickWiz/images/image-115.png" alt=""></p>
<ol>
<li>
<p>在打开软件时，避免了重复性的异常弹窗；</p>
</li>
<li>
<p>防呆描述中明确了错误对象（如定位到某一作业某一视觉参数）。</p>
</li>
</ol>
</li>
<li>
<p>工件配置未设置抓取点时的视觉运行校验和提示。</p>
<p><img src="@source/PickWiz/images/image-114.png" alt="无插件插件的引导提示"></p>
<p><img src="@source/PickWiz/images/image-110.png" alt="识别类型/识别局部特征场景的引导提示"></p>
<blockquote>
<p><strong>解决的问题：</strong>在新增工件配置时默认无抓取点，需要手动添加，但用户在使用过程中常常忘了添加抓取点。</p>
</blockquote>
</li>
<li>
<p>端口被占用时，打开PickWiz会提示报错，关闭占用进程后，可一键重启软件。</p>
<p><img src="@source/PickWiz/images/image-109.png" alt=""></p>
</li>
</ul>
</li>
<li>
<p>优化了 作业信息栏在1440*900分辨率下的布局，以及英文版侧栏响应式UI。</p>
<p><img src="@source/PickWiz/images/image-108.png" alt=""></p>
<p><img src="@source/PickWiz/images/image-113.png" alt=""></p>
<p><img src="@source/PickWiz/images/image-106.png" alt=""></p>
<p><img src="@source/PickWiz/images/image-107.png" alt=""></p>
</li>
</ol>
<h1 id="问题修复" tabindex="-1"><a class="header-anchor" href="#问题修复"><span>问题修复</span></a></h1>
<p>修复了以下问题：</p>
<ol>
<li>
<p><a href="https://dexforce.feishu.cn/wiki/YTu1wAW26iTvITkgEsbcvcrRnB3#share-QiPrdnfa2oiSpwx9ni8cxWFhnIe" target="_blank" rel="noopener noreferrer">面型工件的并行化场景</a>中，由于模型重复注册，系统会反复尝试连接内网，导致耗时过长的问题。</p>
<blockquote>
<p>1.8之前的软件版本需要使用有序面型并行化需要 @研发 定制</p>
</blockquote>
</li>
<li>
<p>部分现场会定期断电/异常断电后，后台配置文件会损坏，导致再次打开软件后无法正常使用。</p>
</li>
<li>
<p>由于代码问题导致可视化的过滤配置不生效。</p>
</li>
</ol>
<h1 id="已知问题" tabindex="-1"><a class="header-anchor" href="#已知问题"><span>已知问题</span></a></h1>
<ol>
<li>
<p>端侧影子模式训练会小概率失败（该问题在标配工控机上显著），后续会在1.8.0.1版本修复。</p>
<blockquote>
<p>如果使用影子模式训练失败，优先重新训练；仍失败，可及时提问题单给研发进行判断/协助训练。</p>
</blockquote>
<p><img src="@source/PickWiz/images/image-112.png" alt="参考对应报错信息，可快速判断和反馈"></p>
</li>
<li>
<p>FINCH相机在彩色模式下的手眼标定转黑白模式时（黑色模式/彩色模式的分辨率有区别），标定坐标系发生改变，导致抓取异常，具体见：<a href="https://dexforce.feishu.cn/wiki/VrLewH29IiuNf2kTOa7c70Umnyb?fromScene=spaceOverview#share-Xul6dbXFLoAnRvxAbwhcInXlnig" target="_blank" rel="noopener noreferrer"> 相机问题收集及解决方法</a></p>
<blockquote>
<p>来源： </p>
</blockquote>
</li>
</ol>
<h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h1>
<ol>
<li>
<p>若交付现场遇到需要KINGFISHER相机需要补光的情况，可参考：<a href="https://dexforce.feishu.cn/wiki/SaEHwtFr5itLAvkbWGEcU6yinnh?from=from_copylink" target="_blank" rel="noopener noreferrer"> KINGFISHER相机补光方案介绍</a>。</p>
</li>
<li>
<p>已出货/新结构光相机的出货BOM可选 防激光打标滤光片。</p>
<p><strong>适用场景</strong></p>
<p>现场光环境存在激光，导致镭雕机直射或反射进相机（会直接导致3D相机内部光机DMD芯片损坏，且不可逆）。</p>
<blockquote>
<p>若项目场景存在激光，售前评估需要在制定项目方案时明确。</p>
</blockquote>
</li>
</ol>
<h1 id="_1-8-0-1-修复版本" tabindex="-1"><a class="header-anchor" href="#_1-8-0-1-修复版本"><span>1.8.0.1 修复版本</span></a></h1>
<p>本版本基于PickWiz 1.8进行了碎片问题的修复，旨在提供一个更稳定的版本。</p>
<blockquote>
<p>注意</p>
<ol>
<li>
<p>本版本无新增功能；</p>
</li>
<li>
<p>使用PickWiz 1.8时，存在以下问题，可升级至PickWiz 1.8.0.1版本。</p>
</li>
</ol>
</blockquote>
<p>修复的问题如下：</p>
<ol>
<li>
<p>一键联通未录入纹理时，创建任务时会报错，且无法训练。</p>
</li>
<li>
<p>训练后，检测结果存在长宽比异常反向拉伸（如下图）。</p>
<p><img src="@source/PickWiz/images/image-105.png" alt=""></p>
</li>
<li>
<p>面型工件有序上下料并行化场景中，设置 <a href="https://dexforce.feishu.cn/wiki/IlX0wexxfiEFnhkyzaEcfYUPnZM#share-BRKnde6XDoK7wKxIEWvcYHdJnsf" target="_blank" rel="noopener noreferrer">多模版</a> - <a href="https://dexforce.feishu.cn/wiki/IlX0wexxfiEFnhkyzaEcfYUPnZM#share-Gpp4dgVzCovGz3xKSXEcJypQnid" target="_blank" rel="noopener noreferrer">灰度模式</a> 会报错.</p>
</li>
<li>
<p>软件频繁切换作业时，显存未释放。</p>
</li>
<li>
<p>3D相机无点云时，运行时会崩溃。</p>
<p><img src="@source/PickWiz/images/image-104.png" alt="修复后，不会崩溃，且提示点云为空。"></p>
</li>
<li>
<p>漂移校正使用过程中，实际抓取点超出设定阈值时，in_dt（是否超出阈值）机器人通信字段会缺失。</p>
</li>
<li>
<p>纸箱单拆场景中，使用隔板和底托检测插件时，机器人配置中添加scn_cls_id字段，运行后无抓取坐标输出。</p>
</li>
<li>
<p>查看KINGFISHER相机精度时，软件会崩溃。</p>
<blockquote>
<p><strong>注意</strong></p>
<p>使用PicKWiz1.7+版本出现此类问题后，需要按照以下步骤<strong>手动处理</strong>：</p>
</blockquote>
<ol>
<li>
<p><strong>判断文件字段是否存在</strong>：新版的相机出厂时的内外参配置yaml文件中，新增了字段（如图），判断是否存在。</p>
<p><img src="@source/PickWiz/images/image-103.png" alt="需要手动删除"></p>
<blockquote>
<p>后续该字段会删除，避免出厂相机无法正常使用精度相关功能。</p>
</blockquote>
</li>
<li>
<p><strong>新增字段</strong>：如果存在，可快速右键打开内外参配置，手动在文件中删除，然后重新导入yaml配置刷新（或者改动后重启软件）</p>
<p><img src="@source/PickWiz/images/image-102.png" alt=""></p>
</li>
<li>
<p><strong>验证是否生效</strong>：点击查看相机精度/校正精度，可正常加算出精度结果，且软件不崩溃，则说明问题解决</p>
</li>
</ol>
</li>
</ol>
</div></template>


