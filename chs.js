/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Continue": "继续",
    "Credits": "鸣谢",
    "Import / Export": "导入/导出",
    "Options": "选项",
    "wigmaker": "假发师",
    "wigmaker is loading...": "假发师正在加载...",
    "wigmaker requires JavaScript and a modern\n        browser": "假发师 需要 JavaScript 和现代的\n 浏览器",
    "Menu": "菜单",
    "Create a breathtaking wig": "制作一个 华丽 的假发",
    "Create a fabulous wig": "制作一个 很棒 的假发",
    "Create a fancy wig": "制作一个 花俏 的假发",
    "Create a miraculous wig": "制作一个 不可思议 的假发",
    "Create a spectacular wig": "制作一个 壮观 的假发",
    "Create a beautiful wig": "制作一个 漂亮 的假发",
    "Create a stupendous wig": "制作一个 优秀 的假发",
    "Create a marvelous wig": "制作一个 绝妙 的假发",
    "Create a roguish wig": "制作一个 调皮 的假发",
    "Create a astounding wig": "制作一个 吓人 的假发",
    "Create an amazing wig": "制作一个 神奇 的假发",
    "Hair": "头发",
    "Stores": "库存",
    "Wig caps": "假发底座",
    "Wigs": "假发",
    "A periwig like no other": "一个与众不同的假发",
    "A perruquier’s delight": "一个诡计多端的东西",
    "A wig of very excellent intentions": "一个非常优秀的假发",
    "An admirable piece of craftsmanship": "一个令人钦佩的手艺品",
    "Customer arrives, wishes to buy wig stock for $10 a wig.": "顾客来了，希望以 $10 的价格购买库存的假发。",
    "Investigate": "调查",
    "Sell all": "全部出售",
    "Memo": "备忘录",
    "Make": "制作",
    "There’s been an incident...": "发生了一个事件...",
    "Sold!": "出售！",
    "A deliriously charming wig": "一顶迷人的假发",
    "Begin actively marketing wigs.": "开始积极推销假发。",
    "Contemplate": "沉思",
    "Create an astounding wig": "制作一个惊艳的假发",
    "Customer leaves happy, promises to tell friends": "客户高兴地离开了，并承诺告诉会朋友们",
    "Ideas bubble as wigs form": "假发形成时，想法会迸发",
    "Market forces": "市场势力",
    "No new ideas": "没有新想法",
    "Notions": "观念",
    "Ponder": "思考",
    "A joyous exhibition": "欢乐的展览",
    "Campaigns": "活动",
    "Forces": "势力",
    "Market": "市场",
    "Marketing may prove to be the catalyst of ambitious desires": "营销可能被证明是雄心勃勃的催化剂",
    "Orders": "订单",
    "Purchase machine for making wig caps.": "购买用于制作假发底座的机器。",
    "Stock": "库存",
    "There is glamour and then there are wigs": "除了魅力，还有假发",
    "Unit Price": "单价",
    "Wig Cap Spinner": "假发底座微调器",
    "Print advertising": "印刷广告",
    "Realize": "实现",
    "The curls are so choice": "卷发真是不错的选择",
    "Wig (4 hair, wig cap": "假发 (4 头发, 假发底座",
    "Campaign ends": "活动结束",
    "Contraptions to ease the burden": "减轻负担的装置",
    "Create a phenomenal wig": "制作一个 非凡 的假发",
    "Create a smashing wig": "制作一个 了不起 的假发",
    "Create a stunning wig": "制作一个 印象深刻 的假发",
    "Create a terrific wig": "制作一个 极好 的假发",
    "Create a wig of distinction": "制作一个 与众不同 的假发",
    "Create a wig to behold": "制作假发以供观赏",
    "Create an outstanding wig": "制作出众的假发",
    "Fine wigs never hats": "精美的假发从不戴帽子",
    "Machinery": "机械",
    "Slow but dependable wig making machinery.": "缓慢但可靠的假发制造机械。",
    "Très, très chic": "非常,非常别致",
    "Hair from here, there and everywhere": "来自这里，那里和任何地方的头发",
    "Nylon": "尼龙",
    "Nylon wig caps are the basis of all good wigs": "尼龙假发底座是所有好假发的基础",
    "Wig cap (1 nylon": "假发底座（1 尼龙",
    "Yet another fine wig": "又一个漂亮的假发",
    "Create a distinguished wig": "制作出众的假发",
    "Create a monumental wig": "制作一个不朽的假发",
    "Create a remarkable wig": "制作非凡的假发",
    "Create an elegant wig": "制作优雅的假发",
    "Create an extraordinary wig": "制作非凡的假发",
    "Marvelous": "了不起",
    "Simply divine": "简直是神",
    "Classically beautiful": "经典又美丽",
    "Simply adorable": "简直太可爱了",
    "The cogs of industry begin to turn": "工业的齿轮开始转动",
    "Web shop with social media": "有社交媒体的网上商店",
    "Goldilocks": "金发姑娘",
    "“Quality nylon at bargain prices”": "“物美价廉的优质尼龙”",
    "Nylon trading": "尼龙买卖",
    "A deal is made": "达成交易",
    "A small amount of discourse might improve things": "少BB多做事",
    "None available": "没有可用的",
    "Mix hair and nylon to create a lower-cost wig.": "混合头发和尼龙，制作成本更低的假发。",
    "No other head-ware is acceptable": "不接受其他头饰",
    "Nylon-blend wigs": "尼龙混纺假发",
    "A reasonable wig maker.": "一个合理的假发制造商。",
    "Better control over power supply and distribution.": "更好地控制供电和配电。",
    "Flexible power supply": "灵活的电源",
    "Hair wig (4 hair, wig cap": "头发假发（4头发，假发底座",
    "Little else compares": "几乎没有什么比较",
    "Nylon wig (2 hair, 3 nylon, cap": "尼龙假发（2头发，3尼龙，底座",
    "Nylon wigs: not glamorous but good value": "尼龙假发：不光彩但物有所值",
    "Nylon-blend, the wig of choice ($1.4K": "尼龙混纺，首选假发（$1.4K",
    "Wig maker upgraded": "假发机升级",
    "Better model boasting 50% faster running speed.": "更好的模型拥有 50% 更快的运行速度。",
    "Incomparable splendor": "无与伦比的辉煌",
    "A truly splendid provision": "一个真正出色的规定",
    "Create a charming wig": "制作迷人的假发",
    "Create a quaint wig": "制作古朴的假发",
    "Expansion, growth, these are the things to value most": "扩张、成长，这些才是最看重的",
    "Wear it up, wear it down; two styles in one": "穿上它，穿上它； 两种风格合二为一",
    "Far better than a milliner’s hat": "远胜于女帽商的帽子",
    "Increase": "提升",
    "News: Wigs set to come into vogue": "新闻：假发开始流行",
    "Create an astonishing wig": "制作惊艳的假发",
    "So many beautiful wigs": "这么多漂亮的假发",
    "Create a dapper wig": "制作精致的假发",
    "Distinctly the finest wig": "明显是最好的假发",
    "There are many signs of accomplishment": "有很多成就的迹象",
    "One would not wish anything else upon one’s head": "一个人不希望在自己的头上有任何东西",
    "Too delightful for just anyone": "对任何人来说都太令人愉快了",
    "Back": "返回",
    "Dark": "深色",
    "Flat": "扁平化",
    "Light": "光",
    "Off": "关",
    "On": "开",
    "Short and to the point": "简明扼要",
    "Sound": "声音",
    "Tabbed": "选项卡式",
    "Theme": "主题",
    "View": "视图",
    "Avant-garde": "前卫",
    "Code and design by Andy Wilson (redgem.games).": "代码和设计由 Andy Wilson (reddem.games)。",
    "Audio with thanks from": "音频来自",
    "200% wig cap manufacturing.": "200% 假发底座制造。",
    "Boost": "提升",
    "Create a wondrous wig": "制作一个奇妙的假发",
    "Latest model with twice the performance.": "具有两倍性能的最新型号。",
    "News: Wigs shining brightly": "新闻：闪亮的假发",
    "One cannot shape the beauty into words": "无法将美塑造成文字",
    "Power": "电力",
    "Power supply management available": "提供电源管理",
    "Turbo charged wig cap spinning.": "涡轮增压假发底座旋转。",
    "Wig cap manufacturing improved": "假发底座制造改进",
    "Dark, light, either is just right": "暗的，亮的，都刚刚好",
    "demand, 1,000 supply": "需求，1,000 供应",
    "Free loaders": "免费装载机",
    "Grid": "格",
    "No way to pay but a desire for wigs.": "没有办法支付，但有对假发的渴望。",
    "Offer complementary wigs": "提供配套假发",
    "Show them the door": "给他们看门",
    "The Frizz": "卷曲",
    "A Milliner? Absurd": "一个女帽？ 荒诞",
    "Brand improved owing to generosity": "品牌因慷慨而提升",
    "Create a superb wig": "制作一流的假发",
    "News: Wigs are flavor of the month": "新闻：假发是本月的味道",
    "Things are starting to get a bit hectic": "事情开始变得有点紧张",
    "No need for dullness": "不需要闷闷不乐",
    "Absolutely fantastic": "绝对精彩",
    "The craftsmanship is superb": "工艺精湛",
    "Import / export": "导入 / 导出",
    "Import successful": "导入成功",
    "Reset": "重置",
    "A successful trade": "一次成功的交易",
    "And the reign of hat wearing draws to a close": "戴帽子的统治即将结束",
    "Better value by buying more.": "通过购买更多来获得更好的价值。",
    "Branding starts to become influential": "品牌开始变得有影响力",
    "Create a fantastic wig": "打造梦幻般的假发",
    "Divine is thy wig": "神圣是你的假发",
    "Fabrication": "制造",
    "Fabrication facility now online": "制造设施现已上线",
    "Fabricators: 2": "制造商：2",
    "Hat makers be damned": "帽子制造商该死",
    "Multi-pack purchasing": "多包采购",
    "News: Hat sales struggle, wigs on the up": "新闻：帽子销售困难，假发在上升",
    "News: Wig wearing takes country by storm": "新闻：戴假发风靡全国",
    "News: Wig will they go from here?": "新闻：假发他们会从这里走吗？",
    "Not making wigs but sculpting beauty": "不是做假发，而是雕刻美",
    "The perfect counterpart to an outstanding wig": "出色假发的完美搭档",
    "Unparalleled hair styling": "无与伦比的发型",
    "Who is laughing now, Hatters?": "现在谁在笑，帽子商？",
    "Wiglet (1 nylon": "小辫子 (1 尼龙",
    "Wiglet": "小辫子",
    "Wiglets": "小辫子",
    "Works even in a dark room": "即使在黑暗的房间里也能工作",
    "boosted": "已提升",
    "Trends": "潮流",
    "Brand value 15,000 required for trends": "潮流所需的品牌价值15,000",
    "A better deal is struck": "达成了更好的交易",
    "Buying": "购买",
    "Create a tremendous wig": "创造一个巨大的假发",
    "Improved packaging": "改进的包装",
    "More pleasant unboxing experience.": "更愉快的开箱体验。",
    "Negotiate bulk-buy discounts.": "协商批量购买折扣。",
    "Nationwide presence": "遍布全国",
    "Pop-up stands throughout the country.": "全国各地的快闪店。",
    "Wind": "风能",
    "Brand strong enough for trend setting": "品牌足够强大，足以引领潮流",
    "Convert": "转换",
    "FabrFlow": "法布流",
    "News: Milliner conference discusses wig wearing upswing": "新闻：女帽 会议讨论戴上假发的问题",
    "No more bed head": "没有床头了",
    "Optimize fabricator output efficiency.": "优化制造商的输出效率。",
    "So much change; so much lost": "变化如此之大； 失去了太多",
    "Solar": "太阳能",
    "Trend: Mock Tudor": "潮流：模拟都铎王朝",
    "Wig boxes ignite social media; brand per sale increases": "假发盒点燃社交媒体； 每次销售的品牌增加",
    "Bulk sale": "批发",
    "Fabricator performance improved": "制造商性能提高",
    "Offer received to bulk buy wigs for $45 each.": "收到批量购买假发的报价，每个 $45。",
    "Sell none": "不卖",
    "Much more performant fabricators.": "更多高性能制造商。",
    "Operational efficiency": "运营效率",
    "The reach into the nation extends (+3 per sale": "进入全国范围扩张（每次销售+3",
    "Aggressive negotiations": "激进的谈判",
    "Ensure best price for raw materials.": "确保原材料的最优价格。",
    "A even better deal is struck": "达成了更好的交易",
    "A really good deal is struck": "达成了一笔非常好的交易",
    "Auto wig switch module now installed": "现在安装了自动假发开关模块",
    "AutoSilicon": "自动硅",
    "Drive wig sales into new markets.": "将假发销售推向新市场。",
    "News: A new trend has started": "新闻：一个新的潮流已经开始",
    "News: Baseball caps banned in public places": "新闻：公共场所禁止戴棒球帽",
    "News: Milliners adorn hardhats as safety concerns raised over hat wearing": "新闻：由于安全问题引发了对帽子佩戴的安全担忧，女帽装饰安全帽",
    "News: Red tape slashed for wig manufacturers": "新闻：减少假发制造商的繁文缛节",
    "News: Silicone wigs rated “outstanding”": "新闻：硅胶假发被评为“优秀”",
    "News: Trouble in Panama, hats banned": "新闻：巴拿马的麻烦，帽子被禁止",
    "Open up new markets": "开拓新市场",
    "Research": "研究",
    "Research center now online": "研究中心现已上线",
    "Silicon": "硅",
    "Silicon auto buy available": "硅自动购买可用",
    "Silicone": "硅胶",
    "Silicone wig (3 silicon, cap": "硅胶假发（3硅胶，底座",
    "Trend: Court dress": "潮流：宫廷礼服",
    "Vogue limit increased": "时尚上限增加",
    "Wigs made from silicone now available": "硅胶假发现已上市",
    "Recent stock check reports additional units.": "最近的库存检查报告附加单位。",
    "Stock check": "库存检查",
    "Update stock values": "更新库存值",
    "From the Consortium of Milliners": "来自女帽商联盟",
    "News: Mandatory wigs for all loiterers": "新闻：所有闲逛者都必须戴假发",
    "Stock levels updated": "库存等级已更新",
    "That’s far enough.": "这已经足够了。",
    "We can no longer tolerate this encroachment into our domain.": "我们不能再容忍这种对我们领域的侵犯。",
    "News: Hairspray linked to hair loss": "新闻：发胶与脱发有关",
    "News: Rivalry between hat makers and wig makers turns to open conflict": "新闻：帽子制造商和假发制造商之间的竞争变成公开冲突",
    "Sabotage": "破坏",
    "Supply line to power grid severed.": "电网供电线路被切断。",
    "News: No hair in face whilst driving": "新闻：开车时脸上没有头发",
    "Reduced power supply": "减少电力供应",
    "Void power online": "虚空电力在线",
    "Void": "虚空",
    "Additional fabricator bulk action quantity available": "提供额外的制造商批量操作数量",
    "Algae": "藻类",
    "Algae incubator": "藻类培养箱",
    "Algae wig (1 algae": "藻类假发（1个藻类",
    "Algae wigs are an innovation to behold": "藻类假发是一项值得一看的创新",
    "Campaign Manager": "竞选经理",
    "Data center complete": "数据中心完成",
    "Data centers": "数据中心",
    "Fabricator performance enhancers.": "制造商性能增强剂。",
    "Fake identity used to steal large quantity of wigs.": "假身份用于盗取大量假发。",
    "Growth effectiveness: Developing": "增长效率：发展中",
    "Harvest": "收成",
    "hyperFab": "超级工厂",
    "Install micros": "安装微型",
    "Mesh": "网",
    "Mesh online": "网格在线",
    "Micro compute": "微计算",
    "Micro compute (50 silicon": "微计算（50 硅",
    "News: Wig statue unveiled": "新闻：假发雕像揭幕",
    "News: Wig wearing basketball players are a slam dunk": "新闻：戴假发的篮球运动员都是灌篮高手",
    "News: Wigs are red hot": "新闻：假发炙手可热",
    "Node connections not currently available": "节点连接当前不可用",
    "Online": "在线",
    "Opportunities": "机会",
    "Theft": "盗窃",
    "Growth effectiveness: Prospering": "增长效益：繁荣",
    "Nothing can be done to recover stolen wigs": "没有办法找回被盗的假发",
    "hyperFab ready": "超级工厂准备就绪",
    "Internet connected wigs with voice control.": "带有语音控制的互联网连接假发。",
    "Smart wig pattern": "智能假发图案",
    "Growth effectiveness: Emergent": "增长效率：紧急",
    "Dedicated private network infrastructure.": "专用的专用网络基础设施。",
    "Fabrication capacity reduced": "制造容量降低",
    "Franchise outlets": "加盟店",
    "Moustache shaming ($5M": "胡须羞辱 ($5M",
    "News: Airline declares wigs safe for pilots": "新闻：航空公司宣布飞行员的假发是安全的",
    "News: Committee formed to promote benefits of wigs": "新闻：委员会成立以促进假发的好处",
    "News: Fire at wig making facility, no one was available for comment": "新闻：假发制造厂发生火灾，没有人可以发表评论",
    "News: Government opens first wig recycling plant": "新闻：政府开设第一家假发回收厂",
    "News: Hockey team iced for not wearing wigs": "新闻：曲棍球队因不戴假发而被冰封",
    "News: No where to grow; short hair mandatory across public services": "新闻：无处可生长； 公共服务强制短发",
    "News: Politicians agree landmark push for wig wearing": "新闻：政界人士同意推动戴假发的里程碑式推动",
    "News: Schools told to include hair hygiene in curriculum": "新闻：学校被告知将头发卫生纳入课程",
    "News: Swimming pools to offer wig hooks": "新闻：游泳池提供假发挂钩",
    "News: Wig ownership rockets forward": "新闻：假发所有权火箭向前",
    "Setup shop throughout the world.": "在世界各地开设商店。",
    "Solar and wind collection upgraded": "太阳能和风能收集升级",
    "The Mesh": "网格",
    "Trend: Brazilian part 2": "潮流：巴西第 2 部分",
    "Vegan-friendly wigs": "素食主义者友好的假发",
    "Wigs made from all natural algae fibres.": "由所有天然藻类纤维制成的假发。",
    "Growth effectiveness: Blooming": "生长效果：开花",
    "Auto": "自动",
    "Commence": "开始",
    "Control the media": "控制媒体",
    "decentralized": "去中心化",
    "Destiny arrives": "命运降临",
    "Enhanced on-demand": "按需增强",
    "Harass persistent hat wearers.": "骚扰顽固的帽子佩戴者。",
    "maxed": "最大",
    "mesh mode": "网格模式",
    "Micro+bio": "微生物+生物",
    "Micro+bio (3 putty, 5 silicon, 6 hair": "微+生物 (3 腻子, 5 硅, 6 头发",
    "News: Experts advise “baldness is now universal”": "新闻：专家建议“秃头现在很普遍”",
    "News: Scientists confirm every human now a wig wearer": "新闻：科学家证实现在每个人都是假发佩戴者",
    "News: Shampoo shortage boon for wig makers": "新闻：洗发水短缺给假发制造商带来福音",
    "News: Single wig supplier remains after outmanoeuvring competition": "新闻：在战胜竞争后，单一假发供应商仍然存在",
    "News: Total hat ban in place": "新闻：全面禁止帽子",
    "Order backlog redundant due to streamlining": "由于精简，订单积压冗余",
    "Research data obtained": "获得的研究数据",
    "Smart": "聪明的",
    "Smart chip (1 putty, 2 silicon": "智能芯片（1个腻子，2个硅",
    "Smart chips": "智能芯片",
    "Smart wig (1 algae, chip": "智能假发（1个藻类，芯片",
    "Subversion": "颠覆",
    "Synapse enhancer": "突触增强剂",
    "Synaptic putty": "突触腻子",
    "The milliner threat draws to a close": "制帽商威胁接近尾声",
    "The ultimate blend of organic and inorganic": "有机与无机的终极融合",
    "Trend: Traditional Japanese part 2": "潮流：传统日语第 2 部分",
    "Unleash drone squadrons": "释放无人机中队",
    "Generating instruction sequence": "生成指令序列",
    "Transferring": "传输",
    "Drone squadrons unleashed": "无人机中队出动",
    "Matching brainwaves": "匹配脑电波",
    "Encoding pattern": "编码模式",
    "Delivering into subconscious": "传递到潜意识",
    "Confirmed": "已确认",
    "Eradicate Milliners": "根除女帽",
    "News: Wigs, wigs, nothing but wigs": "新闻：假发，假发，除了假发什么都没有",
    "Awaiting confirmation": "等待确认",
    "Disconnected": "断开连接",
    "Disconnecting from SMART-2hd9i.mgfnpn": "从 SMART-2hd9i.mgfnpn 断开",
    "End": "通关",
    "Establishing interface": "建立接口",
    "The hat makers are gone.": "帽子制造商走了。",
    "Create an admirable wig": "制作一个令人钦佩的假发",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "wigs made: ": "制作的假发：",
    "cash: ": "现金：",
    "Strands: ": "线：",
    "Web shop with social media (": "带有社交媒体的网上商店（",
    "Print advertising (": "平面广告（",
    "Brand opportunity: ": "品牌商机：",
    "Wig Maker ": "假发师 ",
    "Buy nothing": "什么都不买",
    "Buy ": "购买 ",
    "Wear it up, wear it down; two styles in one (": "穿上它，穿上它； 两种风格合二为一（",
    "Vogue: ": "时尚：",
    "Version ": "版本 ",
    "Source code": "",
    "Wig Cap Feeder Module v": "假发底座进料模块 v",
    "Bribed politicians: ": "贿赂政客：",
    "Social media influencers (": "社交媒体影响者（",
    "Red, yellow, green: it’s the party wig (": "红、黄、绿：是派对假发（",
    "Fabricators: ": "制造商：",
    "Hair lice scare": "头发虱子恐慌",
    "Political influencers (": "政治影响者（",
    "Trend: The Perm part ": "潮流：烫发部分",
    "Nodes: ": "节点：",
    "Coverage: ": "覆盖范围：",
    "Connections: ": "连接：",
    "Compute: ": "计算：",
    "Commission Toyko center (": "委托东京中心（",
    "Iteration: ": "迭代:",
    "Commission Chicago center (": "委员会芝加哥中心(",
    "hyperFabs: ": "超级工厂：",
    "Go natural with plant-based wigs": "选择天然植物假发",
    "Connecting to ": "连接到 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    " power": " 电力",
    " brand": " 品牌价值",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.]+)\:([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\$([\d\.,]+)T$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+)K$/,
    /^\$([\d\.,]+)K$/,
    /^\$([\d\.,]+)M$/,
    /^\$([\d\.,]+)B$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^([\d\.,]+) Grid \((.+)$/, '$1 格 （$1'],
    [/^([\d\.,]+) Wind \((.+)$/, '$1 风能（$1'],
    [/^([\d\.,]+)\% efficiency$/, '$1\% 有效'],
    [/^([\d\.,]+)\% per ([\d\.,]+) fabs \(([\d\.,]+) micro$/, '每 $2 晶圆厂 $1\%（$3 微'],
    [/^(.+) micro$/, '$1 微型'],
    [/^demand, (.+) supply$/, '需求，$1 供应'],
    [/^Start a trend \((.+) strands$/, '开始潮流（$1 线'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^\≥(.+) brand$/, '\≥$1 品牌'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Brand value: (.+)\+(.+) per sale$/, '品牌价值：$1每次销售 \+$2'],
	[/^Sell ([\d\.]+)$/, '出售 $1'],
	[/^Pool size: (.+)\/(.+)$/, '池大小：$1\/$2'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);