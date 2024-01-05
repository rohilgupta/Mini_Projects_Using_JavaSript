// JavaScript for Productmanagement
        var prodarr = [];
        const displayTable = () =>{
            var str = "<table border ='2'><tr><th>Product Id</th><th>Product Name</th><th>Quantity</th><th>Price</th></tr>" ;
                for(var e of prodarr)
                {
                    str+=`<tr><td>${e.pid}</td><td>${e.pname}</td><td>${e.qty}</td><td>${e.price}</td></tr>`
                }
                str+="<table>";
                    document.getElementById('showHere').innerHTML = str;
                }
                const DeleteProduct = () =>
                {
                    var pid = parseInt(document.getElementById('pid').value);
                    var pos = prodarr.findIndex(ob=>ob.pid === pid);
                    if(pos!==-1)
                    {
                        prodarr.splice(pos,1);
                        displayTable();
                    }else{
                        alert("Product Not Found");
                    }
                }
                const validateAll = () =>
                {
                    var flag1 = false;
                    var flag2 = false;
                    var flag3 = false;
                    var flag4 = false;
                    var pid = parseInt(document.getElementById('pid').value);
                    var pname = document.getElementById('pname').value;
            var qty = document.getElementById('qty').value;
            var price = document.getElementById('price').value;
            if(pid > 0)
            {
                flag4 = true;
                document.getElementById('nerror').innerHTML = " ";
            }
            else
            {
                document.getElementById('nerror').innerHTML = "Invalid Number";
                // alert("Invalid Number");
                
            }
            if(pname.trim().length>3)
            {
                flag1 = true;
                document.getElementById('nmerror').innerHTML = " ";
            }
            else
            {
                document.getElementById('nmerror').innerHTML = "Invalid Name";
                // alert("Invalid Name Entered");
            }
            if(price>0)
            {
                flag2 = true;
                document.getElementById('prerror').innerHTML = " ";

            }
            else
            {
                document.getElementById('prerror').innerHTML = "Invalid Price";
                // alert("Invalid price");
            }
            if(qty > 0)
            {
                flag3 = true;
                document.getElementById('qerror').innerHTML = " ";

            }
            else
            {
                document.getElementById('qerror').innerHTML = "Invalid Qunatity";
                // alert("Invalid Qty");
            }
            console.log(flag1,flag2,flag3,flag4);
            if(flag1 && flag2  && flag3  && flag4 )
            {
                return true;
            }
            else{
                return false;
            } 
        }
        const UpdateProduct = () =>{
            var pid = parseInt(document.getElementById('pid').value);
            var pname = document.getElementById('pname').value;
            var qty = document.getElementById('qty').value;
            var price = document.getElementById('price').value;
            var pos = prodarr.findIndex(ob=>ob.pid===pid);
            if(pos!==-1)
            {
               prodarr[pos].name = name;
               prodarr[pos].qty = qty;
               prodarr[pos].price = price;
            }
            displayTable();
            clearForm();

        }
        const AddProduct = () =>{
            var pid = parseInt(document.getElementById("pid").value);
            var pname = document.getElementById('pname').value;
            var qty = document.getElementById('qty').value;
            var price = document.getElementById('price').value;
            var pos = prodarr.findIndex(ob => ob.pid === pid);
            if(pos !== -1)
            {
             alert("Product with Same Id Already Present")
            }
            if(pos === -1 && validateAll() == true)
            {
                 var prod = {pid,pname,qty,price};
                 prodarr.push(prod);
                 displayTable();
                 clearForm();
            }
        }
        const clearForm = () =>
        {
            document.getElementById('pid').value="";
            document.getElementById('pname').value="";
            document.getElementById('qty').value="";
            document.getElementById('price').value="";
            document.getElementById('pid').focus();

        }