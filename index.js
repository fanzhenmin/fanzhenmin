/*
* @Author: FZM
* @Date:   2017-09-09 14:10:52
* @Last Modified by:   FZM
* @Last Modified time: 2017-09-11 11:30:06
*/
//给任意数加减元素
function spliceminus(arr,pos,num){
 		var newarr=[];
 		for(var i=0;i<arr.length;i++){
 			if(pos<=i && i<(pos+num)){
 				continue;
 			}
 			newarr[newarr.length]=arr[i];
 		}
 		return newarr;
 	}
function spliceplus(arr,pos,...rest){
 		var newarr=[];
 		for(var i=0;i<pos;i++){
 			newarr[newarr.length]=arr[i];
 		}
 		for(var i=0;i<rest.length;i++){
 			newarr[newarr.length]=rest[i];
 		}
 		for(var i=pos;i<arr.length;i++){
 			newarr[newarr.length]=arr[i];
 		}
 		return newarr;
 	}
 	function splice(arr,pos,num,...rest){
 		var newarr=spliceminus(arr,pos,num);
 		if(rest.length>0){
 			newarr=spliceplus(newarr,pos,...rest);
 		}
 		return newarr;
 }
 //回掉函数
 function filert(arr,fn){
 	var newarr=[];
     for(var i=0;i<arr.length;i++){
     	if (fn(arr[i])) {
           newarr[newarr.length]=fn(arr[i]);
     	}
     }
     return newarr;
 }
 //映射 返回偶数
 function map(arr,fn){
		var newarr=[];
		for(i=0;i<arr.length;i++){
			if(fn(arr[i])){
			newarr[newarr.length]=arr[i];
			}
		}
		return newarr;
	}
//映射  运算
function map(arr,fn){
		var newarr=[];
		for(i=0;i<arr.length;i++){
			newarr[newarr.length]=fn(arr[i]);
		}
		return newarr;
	}
//任意位置加任意个元素
 function spliceplus(arr,pos,...rest){
 		var newarr=[];
 		for(var i=0;i<pos;i++){
 			newarr[newarr.length]=arr[i];
 		}
 		for(var i=0;i<rest.length;i++){
 			newarr[newarr.length]=rest[i];
 		}
 		for(var i=pos;i<arr.length;i++){
 			newarr[newarr.length]=arr[i];
 		}
 		return newarr;
 	}
//任意位置减去任意个元素
function spliceminus(arr,pos,num){
 		var newarr=[];
 		for(var i=0;i<arr.length;i++){
 			if(pos<=i && i<(pos+num)){
 				continue;
 			}
 			newarr[newarr.length]=arr[i];
 		}
 		return newarr;
 	}
//反转
function result(arr){
		var newarr=[];
		for(i=arr.length-1;i>-1;i--){
             push(newarr,arr[i]);
		}
		return newarr;
	}

	function push(arr,...rest){
		for(var i=0;i<rest.length;i++){
		arr[arr.length]=rest[i];
		}
	}
//找任意元素所在位置
function all(arr,num){
		for(var i=arr.length-1;i>-1;i--){
			if(arr[i]==num){
				return i
			}	
		}
		return false
	}
//找元素第一个位置
function all(arr,num){
		for(var i=0;i<arr.length;i++){
			if(arr[i]==num){
				return i
			}	
		}
		return false
	}
//连接数组元素
function join(arr,str){
		var result='';
		str=str|| '+';
	for(var i=0;i<arr.length;i++){
		if(i<arr.length-1){
		result += arr[i]+str;
	 }else{
	 	result+=arr[i]
	 }  
	  }
	  return result;
	}
	function join(arr,str){
		var result='';
	for(var i=0;i<arr.length;i++){
		if(i<arr.length-1){
			result +=arr[i]+str
		}else{
			result += arr[i];
	 }
	   }
	 return result;	     
	}
	function some(arr,fn){
		for(var i=0;i<arr.length;i++){
			if(fn(arr[i])){
				return true;
			}
		}
		return false;
	}
	function every(arr,fn){
		for(var i=0;i<arr.length;i++){
			if(!fn(arr[i])){
				return false;
			}
		}
		return true;
	}









//递归  (不是循环)
   fn(1)
   function fn(num){
   	   if(num<5){
   	   	fn(++num)
   	   alert(num) 
   	   }
   }
//闭包函数
function fn(){
	var num=10;
	return fn1();
	function fn1(){
		num++;
		return num;
	}
}
var result = fn()
alert(result());
//箭头函数    		一般在回调中用
var fn=a=>a;    //  var fn=function(a){return a;}
