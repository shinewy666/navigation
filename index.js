$(document).ready(function() { 
    
    const $siteList = $('.siteList') ;
    const $lastLi = $siteList.find('li.last');
    const x = localStorage.getItem('x')
    const xObject = JSON.parse(x) //把json字符串转换为对象
    const hashMap = xObject||[
        {logo:'A',url:'https://www.acfun.cn'},
        {logo:'B',
        url:'https://www.bilibili.com'}
    ]
    console.log(hashMap);
    
    const simplifyurl=(url)=>{
       return url.replace('https://','').replace('http://','').replace('www.','').replace(/\/.*/,'')
    }
    
    const render = ()=>{
        $siteList.find('li:not(.last)').remove()
        hashMap.forEach((node,index) => {
        const $li = $(`<li>
            
                <div class="site">
                    <div class="logo">${node.logo}</div>
                    <div class="link">${simplifyurl(node.url)}</div>
                    <div class="close">
                        <svg class="icon">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </div>
                </div>
            
            </li>`).insertBefore($lastLi)
            $li.on('click',()=>{
                window.open(node.url)
            })
            $li.on('click','.close',(e)=>{
                console.log(index);
                
                e.stopPropagation();//阻止冒泡
                hashMap.splice(index,1)
                render();
            })
    });
    }
    render()
    
    $(".addButton").on("click",function(){
    let url = window.prompt("请问你要添加的网址是啥？");
    console.log(url.indexOf('http'));
    
    if(url.indexOf('http')!=0){
        url = 'https://' + url
    }
    console.log(url)
    
    hashMap.push({
        logo:simplifyurl(url)[0].toUpperCase(), //转为大写
        
        url:url
    });
    
    render();
    });
    window.onbeforeunload = ()=>{
    const string = JSON.stringify(hashMap)
     localStorage.setItem('x',string)
    }
    
    // var func = function () {
        
    //         func= function(){};
    //     }
    //     func();
    //     func();
    // $(document).ready(function(){
    //     $(document).on('keypress',(e)=>{
    //             const {key} = e
    //             for(let i = 0;i<hashMap.length;i++){
    //                 if(hashMap[i].logo.toLowerCase()==key){
    //                     window.open(hashMap[i].url)
    //                 }
    //             }
           
    //         })
       
    // })
    
    // let flag=true
    
    // $('.nmb').focus(function(){
    // if(flag){ 
        
    //     // 当前为开启状态
    //     console.log(flag)
    //     console.log('当前为开启状态')
    
    
    //     return false
       
    // }
    // if(flag){
    //     flag=false
    //     
    
    // }else{
    //     // flag=false
    //     console.log(flag);
        
    // }
    });
    
    // $('.nmb').blur(()=>{
    // flag=true
    // console.log(flag)
    // console.log('当前关闭')
    // $(document).on('keypress',(e)=>{
    //         const {key} = e
    //         for(let i = 0;i<hashMap.length;i++){
    //             if(hashMap[i].logo.toLowerCase()==key){
    //                 window.open(hashMap[i].url)
    //             }
    //         }
    //     })
    // })
    
    
    // }); 

