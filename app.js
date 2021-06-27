           function mouseover(a)
           {
               var style=document.getElementById(a).style
               style.backgroundColor="rgb(65, 63, 63)"
           }
           function clickedn(a)
           {
            var v=document.getElementById("I").value 
            if(v!=="")
            {
               if(v[v.length-1]!==')')
               {
                var t=[]
                t.push(v)
                t.push(a)
                document.getElementById("I").value=t.join('')
               }
            }
            else
            document.getElementById("I").value=a
            var style=document.getElementById(a).style
               style.backgroundColor="rgb(14, 253, 221)"
               setTimeout(mouseover,300,[a])
           }
           function clickedsy(a)
           {
             var v=document.getElementById("I").value
             if(v!=="")
             {
                 if(v[v.length-1]!=='(')
                 {
                     if(v[v.length-1]!=='+' && v[v.length-1]!=='×' && v[v.length-1]!=='÷'){
                     var t=[]
                     t.push(v)
                     t.push(a)
                     document.getElementById("I").value=t.join('')
                     }
                 }
             }
             var style=document.getElementById(a).style
               style.backgroundColor="rgb(14, 253, 221)"
               setTimeout(mouseover,300,[a])
           }
           function clickedsub(a)
           {
               var v=document.getElementById("I").value
               if(v[v.length-1]!=='+' && v[v.length-1]!=='×' && v[v.length-1]!=='÷' && v[v.length-1]!=='-'){
                     var t=[]
                     t.push(v)
                     t.push(a)
                     document.getElementById("I").value=t.join('')
                     }
                     var style=document.getElementById(a).style
               style.backgroundColor="rgb(14, 253, 221)"
               setTimeout(mouseover,300,[a])
           }
           function clickedp(a)
           {
               var v=document.getElementById("I").value
               if(v[v.length-1]!==')')
               {
                   if(v[v.length-1]==='1' || v[v.length-1]==='2' || v[v.length-1]==='3' || v[v.length-1]==='4' || v[v.length-1]==='5' || v[v.length-1]==='6' || v[v.length-1]==='7' || v[v.length-1]==='8' ||v[v.length-1]==='9' || v[v.length-1]==='0')
                   {
                       var t=[]
                       t.push(v)
                       t.push('.')
                       document.getElementById("I").value=t.join('')
                   }
                   else if(v[v.length-1]!=='.'){
                       var t=[]
                       t.push(v)
                       t.push(0)
                       t.push('.')
                       document.getElementById("I").value=t.join('')
                   }
               }
               var style=document.getElementById(a).style
               style.backgroundColor="rgb(14, 253, 221)"
               setTimeout(mouseover,300,[a])
           }
           function clickedob(a)
           {
               var v=document.getElementById("I").value
               if(v[v.length-1]!==')' && (v[v.length-1]==='+' || v[v.length-1]==='-' || v[v.length-1]==='×' || v[v.length-1]==='÷' || v[v.length-1]=='('))
               {
                   var t=[]
                   t.push(v)
                   t.push('(')
                   document.getElementById("I").value=t.join('')
               }
               else if(v==="")
               {
                var t=[]
                   t.push(v)
                   t.push('(')
                   document.getElementById("I").value=t.join('') 
               }
               var style=document.getElementById(a).style
               style.backgroundColor="rgb(14, 253, 221)"
               setTimeout(mouseover,300,[a])
           }
           function clickedcb(a)
           {
             var v=document.getElementById("I").value
             if(v!=="" && (v[v.length-1]!=='+' && v[v.length-1]!=='×' && v[v.length-1]!=='÷' && v[v.length-1]!=='-' && v[v.length]!=='.'))
             {
                var t=[]
                   t.push(v)
                   t.push(')')
                   document.getElementById("I").value=t.join('') 
             }
             var style=document.getElementById(a).style
               style.backgroundColor="rgb(14, 253, 221)"
               setTimeout(mouseover,300,[a])
           }
           function clickedac(a)
           {
            document.getElementById("I").value=""
            document.getElementById("F").value=""
            var style=document.getElementById(a).style
               style.backgroundColor="rgb(14, 253, 221)"
               setTimeout(mouseover,300,[a])
           }
           function clickedc(a)
           {
            var v=document.getElementById("I").value
            var st=[]
            for(var i=0;i<v.length-1;i++)
            st[i]=v[i]
            document.getElementById("I").value=st.join('')
            var style=document.getElementById(a).style
               style.backgroundColor="rgb(14, 253, 221)"
               setTimeout(mouseover,300,[a])
           }
           function division(crr,x,y)
           {
            var drr=new Array()
            var c=0
            for(var i=x;i<=y;i++)
            drr.push(crr[i])
            if(drr.indexOf('÷')!=-1)
            {
             while(drr.indexOf('÷')!=-1)
            { 
              c=c+1
             if(drr[1]=='-')
             {
               var err=new Array()
               err.push('(')
               err.push(-1*drr[2])
               for(var i=3;i<drr.length;i++)
               err.push(drr[i])
               drr=err
             }
             var z=drr.indexOf('÷')
             var a=drr[z-1]
             var b=drr[z+1]
             drr[z-1]=a/b
             drr[z]=' '
             drr[z+1]=' '
             var err=new Array()
             for(var i=0;i<drr.length;i++)
             {
               if(drr[i]=='(' || drr[i]==')' || drr[i]=='÷' || drr[i]=='×' || drr[i]=='+'  || drr[i]=='-' || typeof(drr[i])=="number"){
               err.push(drr[i])
               }
             }
             drr=err
            }
           }
           else
           {
            if(drr[1]=='-')
            {
              var err=new Array()
              err.push('(')
              err.push(-1*drr[2])
              for(var i=3;i<drr.length;i++)
              err.push(drr[i])
              drr=err
              var frr=new Array()
              for(var i=0;i<x;i++)
              frr.push(crr[i])
              for(var i=0;i<drr.length;i++)
              frr.push(drr[i])
              for(var i=y+1;i<crr.length;i++)
              frr.push(crr[i])
              return frr
            }
            else
             return crr
           }
           var frr=new Array()
              for(var i=0;i<x;i++)
              frr.push(crr[i])
              for(var i=0;i<drr.length;i++)
              frr.push(drr[i])
              for(var i=y+1;i<crr.length;i++)
              frr.push(crr[i])
              return frr
          }
          function multiplication(crr,x,y)
          {
            var drr=new Array()
            var c=0
            for(var i=x;i<=y;i++)
            drr.push(crr[i])
            if(drr.indexOf('×')!=-1)
            {
             while(drr.indexOf('×')!=-1)
            { 
              c=c+1
             if(drr[1]=='-')
             {
               var err=new Array()
               err.push('(')
               err.push(-1*drr[2])
               for(var i=3;i<drr.length;i++)
               err.push(drr[i])
               drr=err
             }
             var z=drr.indexOf('×')
             var a=drr[z-1]
             var b=drr[z+1]
             drr[z-1]=a*b
             drr[z]=' '
             drr[z+1]=' '
             var err=new Array()
             for(var i=0;i<drr.length;i++)
             {
               if(drr[i]=='(' || drr[i]==')' || drr[i]=='÷' || drr[i]=='×' || drr[i]=='+'  || drr[i]=='-' || typeof(drr[i])=="number"){
               err.push(drr[i])
               }
             }
             drr=err
            }
           }
           else
           {
            if(drr[1]=='-')
            {
              var err=new Array()
              err.push('(')
              err.push(-1*drr[2])
              for(var i=3;i<drr.length;i++)
              err.push(drr[i])
              drr=err
              var frr=new Array()
              for(var i=0;i<x;i++)
              frr.push(crr[i])
              for(var i=0;i<drr.length;i++)
              frr.push(drr[i])
              for(var i=y+1;i<crr.length;i++)
              frr.push(crr[i])
              return frr
            }
            else
             return crr
           }
           var frr=new Array()
              for(var i=0;i<x;i++)
              frr.push(crr[i])
              for(var i=0;i<drr.length;i++)
              frr.push(drr[i])
              for(var i=y+1;i<crr.length;i++)
              frr.push(crr[i])
              return frr
          }
          function addition(crr,x,y)
          {
            var drr=new Array()
            var c=0
            for(var i=x;i<=y;i++)
            drr.push(crr[i])
            if(drr.indexOf('+')!=-1)
            {
             while(drr.indexOf('+')!=-1)
            { 
              c=c+1
             if(drr[1]=='-')
             {
               var err=new Array()
               err.push('(')
               err.push(-1*drr[2])
               for(var i=3;i<drr.length;i++)
               err.push(drr[i])
               drr=err
             }
             var z=drr.indexOf('+')
             var a=drr[z-1]
             var b=drr[z+1]
             drr[z-1]=a+b
             drr[z]=' '
             drr[z+1]=' '
             var err=new Array()
             for(var i=0;i<drr.length;i++)
             {
               if(drr[i]=='(' || drr[i]==')' || drr[i]=='÷' || drr[i]=='×' || drr[i]=='+'  || drr[i]=='-' || typeof(drr[i])=="number"){
               err.push(drr[i])
               }
             }
             drr=err
            }
           }
           else
           {
            if(drr[1]=='-')
            {
              var err=new Array()
              err.push('(')
              err.push(-1*drr[2])
              for(var i=3;i<drr.length;i++)
              err.push(drr[i])
              drr=err
              var frr=new Array()
              for(var i=0;i<x;i++)
              frr.push(crr[i])
              for(var i=0;i<drr.length;i++)
              frr.push(drr[i])
              for(var i=y+1;i<crr.length;i++)
              frr.push(crr[i])
              return frr
            }
            else
             return crr
           }
           var frr=new Array()
              for(var i=0;i<x;i++)
              frr.push(crr[i])
              for(var i=0;i<drr.length;i++)
              frr.push(drr[i])
              for(var i=y+1;i<crr.length;i++)
              frr.push(crr[i])
              return frr
          }
          function subtraction(crr,x,y)
          {
            var drr=new Array()
            var c=0
            for(var i=x;i<=y;i++)
            drr.push(crr[i])
            if(drr.indexOf('-')!=-1)
            {
             while(drr.indexOf('-')!=-1)
            { 
              c=c+1
             if(drr[1]=='-')
             {
               var err=new Array()
               err.push('(')
               err.push(-1*drr[2])
               for(var i=3;i<drr.length;i++)
               err.push(drr[i])
               drr=err
             }
             var z=drr.indexOf('-')
             var a=drr[z-1]
             var b=drr[z+1]
             drr[z-1]=a-b
             drr[z]=' '
             drr[z+1]=' '
             var err=new Array()
             for(var i=0;i<drr.length;i++)
             {
               if(drr[i]=='(' || drr[i]==')' || drr[i]=='÷' || drr[i]=='×' || drr[i]=='+'  || drr[i]=='-' || typeof(drr[i])=="number"){
               err.push(drr[i])
               }
             }
             drr=err
            }
           }
           else
           {
            if(drr[1]=='-')
            {
              var err=new Array()
              err.push('(')
              err.push(-1*drr[2])
              for(var i=3;i<drr.length;i++)
              err.push(drr[i])
              drr=err
              var frr=new Array()
              for(var i=0;i<x;i++)
              frr.push(crr[i])
              for(var i=0;i<drr.length;i++)
              frr.push(drr[i])
              for(var i=y+1;i<crr.length;i++)
              frr.push(crr[i])
              return frr
            }
            else
             return crr
           }
           var frr=new Array()
              for(var i=0;i<x;i++)
              frr.push(crr[i])
              for(var i=0;i<drr.length;i++)
              frr.push(drr[i])
              for(var i=y+1;i<crr.length;i++)
              frr.push(crr[i])
              return frr
          }
          function clickedeq(a)
          {
              var v=document.getElementById('I').value
              var e=[]
              var c=0
              for(var i=0;i<v.length;i++)
                  {
                      if(v[i]=='/')
                      e.push('÷')
                      else if(v[i]=='*')
                      e.push('×')
                      else
                      e.push(v[i])
                  }
                  var s=e.join('')
              var y=[]
              y.push('(')
              y.push(s)
              y.push(')')
              var t=y.join('')
              var arr=new Array ()         
            var brr=new Array()
            for(var i=0;i<t.length;i++)
            {
             if(i==(t.length))
              {
                var d=0
                for(var j=0;j<arr.length;j++)
                d=d+(arr[j]*Math.pow(10,arr.length-1-j))
                brr.push(d)
                var arr=new Array()
              }
              else if(t[i]=='(')
              brr.push(t[i])
              else if(t[i]==')')
              {
                if(arr.length>0){  
                var d=0
                for(var j=0;j<arr.length;j++)
                d=d+(arr[j]*Math.pow(10,arr.length-1-j))
                brr.push(d)
                brr.push(t[i])
                var arr=new Array()
                }
                else
                brr.push(t[i])
              }
             else if(t[i]!='+' && t[i]!='-' && t[i]!='×' && t[i]!='÷' && t[i]!='.')
              arr.push(t[i])
              else if(t[i]=='.')
              {
                var fr=[]
                var ba=[]
                var j=i-1
                var k=i+1
                while((t[j]!='+' && t[j]!='-' && t[j]!='×' && t[j]!='÷' && t[j]!='(' && t[j]!=')') || (t[k]!='+' && t[k]!='-' && t[k]!='×' && t[k]!='÷' && t[k]!='(' && t[k]!=')'))
                {
                  if(t[j]!='+' && t[j]!='-' && t[j]!='×' && t[j]!='÷' && t[j]!='(' && t[j]!=')')
                  {
                    fr.push(t[j])
                    j=j-1
                  }
                  if(t[k]!='+' && t[k]!='-' && t[k]!='×' && t[k]!='÷' && t[k]!='(' && t[k]!=')')
                  {
                    ba.push(t[k])
                    k=k+1
                  }
                }
                var l=fr.length + ba.length
                var d=0
                for(var c=0;c<l;c++)
                {
                  if(c<fr.length)
                  {
                    d=d+fr[fr.length-1-c]*Math.pow(10,l-1-c)
                  }
                  else
                  {
                    d=d+ba[c-fr.length]*Math.pow(10,l-1-c)
                  }
                }
                var arr=[]
                brr.push(d/Math.pow(10,ba.length))
                i=k-1
              }
              else if((t[i]=='+' || t[i]=='-' || t[i]=='×' || t[i]=='÷') && (arr.length>0))
              {
                var d=0
                for(var j=0;j<arr.length;j++)
                d=d+(arr[j]*Math.pow(10,arr.length-1-j))
                brr.push(d)
                brr.push(t[i])
                var arr=new Array()
              }
              else
              brr.push(t[i])
            }
            var crr=new Array(brr.length+2)
            crr[0]='('
            crr[brr.length+1]=')'
            for(var i=0;i<brr.length;i++)
            crr[i+1]=brr[i] 
          
          var crr=brr
          var f=0
          for(var i=0;i<crr.length;i++)
          {
            if(crr[i]==='(')
            f=f+1;
          }
          while(f!=0){
          y=crr.indexOf(')')
          x=crr.lastIndexOf('(',y)
          crr=division(crr,x,y)
          y=crr.indexOf(')')
          x=crr.lastIndexOf('(',y)
          crr=multiplication(crr,x,y)
          y=crr.indexOf(')')
          x=crr.lastIndexOf('(',y)
          crr=subtraction(crr,x,y)
          y=crr.indexOf(')')
          x=crr.lastIndexOf('(',y)
          crr=addition(crr,x,y)
          y=crr.indexOf(')')
          x=crr.lastIndexOf('(',y)
          crr[x]=' '
          crr[y]=' '
          var f=0
          var krr =[]
          for(var i=0;i<crr.length;i++)
          {
            if(crr[i]==='(')
            f=f+1;
            if(crr[i]!==' ')
            krr.push(crr[i])
          }
          crr=krr
          }
          if(Number.isNaN(crr[0])){
          document.getElementById('I').value=s
          document.getElementById('F').value=""
          }
          else{
            document.getElementById('I').value=crr[0]
            document.getElementById('F').value=s
          }
          
               var style=document.getElementById(a).style
               style.backgroundColor="rgb(14, 253, 221)"
               setTimeout(mouseover,300,[a])
           }
           function mouseout(a)
           {
            var style=document.getElementById(a).style
               style.backgroundColor="rgb(32, 31, 31)"
           }