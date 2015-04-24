/*Name:	  Maeda Hanafi
 	 Course:	   543
 	 Assignment:	   #2
*/
//constructor
function newTable(inArray,caption,cols,width,nextClick){
	//string inside table
	setArray(inArray);
	
	//caption of the generated table
	//this.caption = caption;
	setCaption(caption);
	
	//this.cols = cols;
	setCols(cols);
	
	//width of cols
	//this.width = width;
	setWidth(width);
	
	//nextClick = Function to be called when there is a click within a table cell
	setNext(nextClick);

	print(getCols());
	
}
	
	function setNext(nextClick){
		this.next = nextClick;
	}
	function getNext(){
		return this.next;
	}
	function setArray(inArray){
		this.tArray = inArray;
	}
	function getArray(){
		return this.tArray;
	}
	function getCaption(){
		return this.caption;
	}
	function setCaption(caption){
		this.caption=caption;
	 }

	function getWidth(){
		return this.width;
	}
	function setWidth(width){
		this.width=width;
	 }
	 function getCols(){
		return this.cols;
	}
	function setCols(cols){
		this.cols=cols;
	 }
	function add(element){
	  this.tArray.push(element);
	}
	function get(index){
	  return this.tArray[index];
	}
	
	//displays list of months to choose from
	function next(year, monthorform){
	 //= Function to be called when there is a click within a table cell
	 
	 
		window.close();
		var allmonths= new Array("January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
		if(monthorform==0){ //draw a menu for months
			month =monthorform;
			var output="<title>Select Month</title><form><table><tr><td id=\"caption\">Select a Month</td></tr><tr><td><select name=\"mySel\" onChange=\"next("+year+",this.form);\"> ";
			for(var i=0; i<12;i++){
			output+=" <option value=\""+allmonths[i]+"\">"+allmonths[i]+"</option>"
			}
			output+="</select></td></tr></table></form><script type=\"text/javascript\" src=\"monthscript.js\"></script> <link rel=\"stylesheet\" type=\"text/css\" href=\"deco.css\"><button onclick=\"window.close();\">Close</button>";
			var w = window.open("", "_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400");
			w.window.onload=w.document.write ( output);
		}else{ //create the table for corresponding month by instantiating object
			form = monthorform;
			var month;
			for(i=0;i<form.mySel.options.length;i++){
				if(form.mySel.options[i].selected){ 
					month = form.mySel.options[i].value;
				}
			}
			
			var length;
			if(month=="February"){
				if(year%4==0)//leap year
					length = 29;
				else
					length=28
			}else if(month=="June" && month=="September" && month=="April" && month=="November"){
				length=30;
			}else{
				length=31;
			}
			
			var days = new Array("Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
			
			
			getWeekDay = function (year) {
			  var d = new Date(); 
			  d.setFullYear(year,0,1);
			  return d.getDay()+1;
			};
			for(j=0;j<getWeekDay(year)-1; j++){
				days.push(" ");
			}
			for(j=0;j<length; j++){
				days.push(j+1);
			}
			finaltable = new newTable(days,
									year+" "+month, 
									7 , 
									20 ,
									'none');
		}

	 }
	 
	 
	 
	//Print the table in a new window
	 function print(n){
		var flag=false;
		var output="<title>"+caption+"</title><center><table  >";
			output+="<tr><td id=\"caption\" colspan="+n+">"+caption+"</td></tr>";
			for(var i=0; i<getArray().length; i++){
				if((i)%(n)==0){
					output=output+"<tr>";
					flag=true;
				}
			
				output=output+"<td width="+this.width+">";
				if(this.getNext()=="none"){
					output+=this.get(i);
				}else{
					output=output+"  <div onclick=\"next("+this.get(i)+",0);\">"+this.get(i)+"</div>";
				}
				output=output+"</td>";
				
				if((i)%(n)==0 && !flag){
					//alert(i +" "+n);
					output=output+"</tr>";
				}
			}
			output=output+"</table><script type=\"text/javascript\" src=\"monthscript.js\">"+this.getNext()+"</script> <link rel=\"stylesheet\" type=\"text/css\" href=\"deco.css\"><button onclick=\"window.close();\">Close</button></center>";
			
			
			var w = window.open("", "_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400");
			w.window.onload=w.document.write ( output);
			
	}
	
	
 