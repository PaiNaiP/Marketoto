var kt = document.getElementById('kat');
var kttxt = document.getElementById('kattxt');
var imgkt = document.getElementById('imgkat');
var ath = document.getElementById('auth');
var inpt = document.getElementById('password-input');
var inbtn = document.getElementById('ps_btn');
function ktttt(){
    if(kt.style.background!="rgb(255, 255, 255)"){
        kt.style.background="#FFFFFF";
        kttxt.style.color='#8723C7'
        imgkt.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiM4NzIzYzciPjxwYXRoIGQ9Ik0xMjQuMzY2ODksNTIuNzAwMjNsLTMzLjMwMDA2LDMzLjI5OTc3bDMzLjI5OTg0LDMzLjI5OTc3YzAuOTMxNTEsMC44OTk2OCAxLjMwNTEsMi4yMzE5OCAwLjk3NzE2LDMuNDg0ODJjLTAuMzI3OTMsMS4yNTI4NCAtMS4zMDYzNCwyLjIzMTI1IC0yLjU1OTE4LDIuNTU5MThjLTEuMjUyODQsMC4zMjc5MyAtMi41ODUxMywtMC4wNDU2NSAtMy40ODQ4MiwtMC45NzcxNmwtMzMuMjk5ODUsLTMzLjI5OTc3bC0zMy4yOTk3NywzMy4zMDAwNmMtMS40MDYwMiwxLjM1Nzk4IC0zLjY0MDk3LDEuMzM4NTYgLTUuMDIzMTgsLTAuMDQzNjVjLTEuMzgyMjEsLTEuMzgyMjEgLTEuNDAxNjMsLTMuNjE3MTYgLTAuMDQzNjUsLTUuMDIzMThsMzMuMjk5NzcsLTMzLjMwMDA2bC0zMy4zMDAwNiwtMzMuMjk5NzdjLTEuMzU3OTgsLTEuNDA2MDIgLTEuMzM4NTYsLTMuNjQwOTcgMC4wNDM2NSwtNS4wMjMxOGMxLjM4MjIxLC0xLjM4MjIxIDMuNjE3MTYsLTEuNDAxNjMgNS4wMjMxOCwtMC4wNDM2NWwzMy4zMDAwNiwzMy4yOTk3N2wzMy4yOTk3NywtMzMuMjk5ODVjMS40MDYwMiwtMS4zNTc5OCAzLjY0MDk3LC0xLjMzODU2IDUuMDIzMTgsMC4wNDM2NWMxLjM4MjIxLDEuMzgyMjEgMS40MDE2MywzLjYxNzE2IDAuMDQzNjUsNS4wMjMxOHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')
        imgkt.style.width='30px'
        imgkt.style.margin='5px'
        kttxt.style.marginLeft='-4px'
        kttxt.style.marginTop='13px'
        kt.style.border='solid'
        kt.style.borderColor = '#8723C7'
        kt.style.height='91%'
        kt.style.width = '145px'
    }
    else
    {
        kt.style.background='#8723C7'
        imgkt.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xNy4yLDI3LjUyYy0yLjQ4MTE4LC0wLjAzNTA5IC00Ljc4OTA0LDEuMjY4NSAtNi4wMzk4NywzLjQxMTYxYy0xLjI1MDgzLDIuMTQzMSAtMS4yNTA4Myw0Ljc5MzY5IDAsNi45MzY3OWMxLjI1MDgzLDIuMTQzMSAzLjU1ODY5LDMuNDQ2NyA2LjAzOTg3LDMuNDExNjFoMTM3LjZjMi40ODExOCwwLjAzNTA5IDQuNzg5MDQsLTEuMjY4NSA2LjAzOTg3LC0zLjQxMTYxYzEuMjUwODMsLTIuMTQzMSAxLjI1MDgzLC00Ljc5MzY5IDAsLTYuOTM2NzljLTEuMjUwODMsLTIuMTQzMSAtMy41NTg2OSwtMy40NDY3IC02LjAzOTg3LC0zLjQxMTYxek0xNy4yLDc5LjEyYy0yLjQ4MTE4LC0wLjAzNTA5IC00Ljc4OTA0LDEuMjY4NSAtNi4wMzk4NywzLjQxMTYxYy0xLjI1MDgzLDIuMTQzMSAtMS4yNTA4Myw0Ljc5MzY5IDAsNi45MzY3OWMxLjI1MDgzLDIuMTQzMSAzLjU1ODY5LDMuNDQ2NyA2LjAzOTg3LDMuNDExNjFoMTM3LjZjMi40ODExOCwwLjAzNTA5IDQuNzg5MDQsLTEuMjY4NSA2LjAzOTg3LC0zLjQxMTYxYzEuMjUwODMsLTIuMTQzMSAxLjI1MDgzLC00Ljc5MzY5IDAsLTYuOTM2NzljLTEuMjUwODMsLTIuMTQzMSAtMy41NTg2OSwtMy40NDY3IC02LjAzOTg3LC0zLjQxMTYxek0xNy4yLDEzMC43MmMtMi40ODExOCwtMC4wMzUwOSAtNC43ODkwNCwxLjI2ODUgLTYuMDM5ODcsMy40MTE2MWMtMS4yNTA4MywyLjE0MzEgLTEuMjUwODMsNC43OTM2OSAwLDYuOTM2NzljMS4yNTA4MywyLjE0MzEgMy41NTg2OSwzLjQ0NjcgNi4wMzk4NywzLjQxMTYxaDEzNy42YzIuNDgxMTgsMC4wMzUwOSA0Ljc4OTA0LC0xLjI2ODUgNi4wMzk4NywtMy40MTE2MWMxLjI1MDgzLC0yLjE0MzEgMS4yNTA4MywtNC43OTM2OSAwLC02LjkzNjc5Yy0xLjI1MDgzLC0yLjE0MzEgLTMuNTU4NjksLTMuNDQ2NyAtNi4wMzk4NywtMy40MTE2MXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')
        kttxt.style.color='#FFFFFF'
        imgkt.style.width='15px'
        imgkt.style.marginLeft='15px'
        kttxt.style.margin='15px'
        kttxt.style.marginLeft='4px'
        kt.style.border = 'none'
        kt.style.height = '100%'
        kt.style.width = '150px'
    }
    
}



function showPassword(){
        if(inpt.getAttribute('type')=='password'){
            inpt.setAttribute('type', 'text')
           inbtn.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNkYTgzOTUiPjxwYXRoIGQ9Ik04Ni4wMTEyLDM0LjRjLTQ3LjYyMjcxLDAgLTc4LjQwMTgzLDQ3LjA2MzQ0IC03OS4wMzQ4OSw0OC4wMzkwNmMtMC4wMDY2MSwwLjAxMDE5IC0wLjEyMzE4LDAuMTY3OTcgLTAuMTIzMTgsMC4xNjc5N2MtMC43MjUxNCwwLjk4Mjg0IC0xLjExNzQ3LDIuMTcxNTcgLTEuMTE5NzksMy4zOTI5N2MwLjAwMTAyLDEuMTA5NCAwLjMyMzg4LDIuMTk0NjcgMC45Mjk0MywzLjEyNDIyYzAuMDIxOTcsMC4wMzc1OCAwLjA0NDM3LDAuMDc0OTEgMC4wNjcxOSwwLjExMTk4YzAuMTE4MTIsMC4yMTk4MyAzLjM1NjAyLDUuOTIzOTQgOS40Mzk4NCwxMy4zMTQzM2wtOC41Nzc2LDcuODk0NTNjLTEuNTE4OTQsMS4zODM1OSAtMi4xODE0OSwzLjQ3NDE0IC0xLjczNjc2LDUuNDgwMDdjMC40NDQ3MywyLjAwNTkyIDEuOTI4NzUsMy42MjA1NyAzLjg5MDEyLDQuMjMyNTRjMS45NjEzOCwwLjYxMTk3IDQuMTAwMjcsMC4xMjc3MyA1LjYwNjc5LC0xLjI2OTM4bDguNTQ0MDEsLTcuODYwOTRjMi44MjQxMSwyLjc3MzYgNS45OTgzLDUuNTU0OTkgOS41Mjk0Myw4LjI2NDA3bC01LjgyMjkyLDkuMTE1MWMtMS4xNTE2NCwxLjcyNjk3IC0xLjI4MDAxLDMuOTQxNSAtMC4zMzU2Miw1Ljc4OTk3YzAuOTQ0MzksMS44NDg0NyAyLjgxNDA2LDMuMDQyMTkgNC44ODgzLDMuMTIxMDRjMi4wNzQyNCwwLjA3ODg0IDQuMDI5MTMsLTAuOTY5NTEgNS4xMTExMiwtMi43NDA5NWw1LjY1NDk1LC04Ljg0NjM1YzMuODE1NDQsMi4yNTEzNSA3Ljk3Nzk4LDQuMjU3ODUgMTIuNDA3MjksNi4wMDIwOGwtMy40MDQxNyw5LjcwODZjLTEuMDQ1MTcsMi45OTAxOCAwLjUzMTU3LDYuMjYxNDcgMy41MjE3NCw3LjMwNjY0YzIuOTkwMTgsMS4wNDUxNyA2LjI2MTQ3LC0wLjUzMTU3IDcuMzA2NjQsLTMuNTIxNzRsMy40OTM3NiwtOS45ODg1NGM0LjQwNzQ0LDEuMDYyNzYgOS4xMTI0NCwxLjcwODUzIDE0LjAxOTc5LDIuMDM4MDJ2MTEuNzkxNDFjLTAuMDI5MjQsMi4wNjc2NSAxLjA1NzA5LDMuOTkwODcgMi44NDMsNS4wMzMyMmMxLjc4NTkyLDEuMDQyMzYgMy45OTQ3NCwxLjA0MjM2IDUuNzgwNjYsMGMxLjc4NTkyLC0xLjA0MjM2IDIuODcyMjUsLTIuOTY1NTggMi44NDMsLTUuMDMzMjJ2LTExLjc5MTQxYzQuOTEzMDksLTAuMzI4OTcgOS42MTg4OCwtMC45NzQxMyAxNC4wMzA5OSwtMi4wMzgwMmwzLjQ5Mzc1LDkuOTg4NTRjMC42MjA1MSwyLjAwNDQzIDIuMjg2MzMsMy41MDk4NCA0LjM0MzEzLDMuOTI0OTNjMi4wNTY4MSwwLjQxNTA5IDQuMTc2MDgsLTAuMzI2NDQgNS41MjU0MSwtMS45MzMzMmMxLjM0OTMzLC0xLjYwNjg5IDEuNzEzMTgsLTMuODIyNDcgMC45NDg2NCwtNS43NzY1bC0zLjM5Mjk3LC05LjcwODZjNC40MjkyOCwtMS43NDQyMyA4LjU5MTkyLC0zLjc1MDczIDEyLjQwNzI5LC02LjAwMjA4bDUuNjU0OTUsOC44NDYzNWMxLjA4MTk5LDEuNzcxNDQgMy4wMzY4OCwyLjgxOTc5IDUuMTExMTIsMi43NDA5NGMyLjA3NDI0LC0wLjA3ODg0IDMuOTQzOSwtMS4yNzI1NyA0Ljg4ODMsLTMuMTIxMDNjMC45NDQzOSwtMS44NDg0NiAwLjgxNjAzLC00LjA2Mjk5IC0wLjMzNTYxLC01Ljc4OTk2bC01LjgyMjkyLC05LjExNTFjMy41MzEwMiwtMi43MDkwOCA2LjcwNTUxLC01LjQ5MDQ2IDkuNTI5NDIsLTguMjY0MDdsOC41MzI4Miw3Ljg2MDk0YzEuNTA4MTQsMS4zODg4NCAzLjY0Mjc0LDEuODY3NDMgNS41OTk0OCwxLjI1NTQzYzEuOTU2NzQsLTAuNjEyIDMuNDM4MjMsLTIuMjIxNTggMy44ODYyNSwtNC4yMjIyNGMwLjQ0ODAyLC0yLjAwMDY2IC0wLjIwNTUyLC00LjA4ODM1IC0xLjcxNDM3LC01LjQ3NjQybC04LjU3NzYsLTcuODk0NTNjNi4xNTgwOCwtNy40ODE2MSA5LjQyOTUyLC0xMy4yOTU3NyA5LjQ3MzQzLC0xMy4zODE1MWMwLjAwMDM0LC0wLjAwMDY1IDAuMDIyNDEsLTAuMDQ0NzkgMC4wMjI0LC0wLjA0NDc5YzAuNjA1NTUsLTAuOTI5NTUgMC45Mjg0MSwtMi4wMTQ4MiAwLjkyOTQyLC0zLjEyNDIyYy0wLjAwMTQ2LC0xLjIxNjMxIC0wLjM4OTcsLTIuNDAwNjUgLTEuMTA4NTksLTMuMzgxNzdjMCwtMC4wMDM3MyAwLC0wLjAwNzQ2IDAsLTAuMDExMmMwLDAgLTMxLjAyNzAxLC00OC4yMDcwMyAtNzkuMTQ2ODgsLTQ4LjIwNzAzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')
        }
        else{
            inpt.setAttribute('type', 'password')
            inbtn.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNkYTgzOTUiPjxwYXRoIGQ9Ik04NiwyOC42NjY2N2MtNTEuMTMxNTcsMCAtODQuMTU5NjcsNTIuODEwNzcgLTg0Ljc1NzAzLDUzLjc3MjM5Yy0wLjgwNDA2LDEuMDEyODMgLTEuMjQyMSwyLjI2Nzc1IC0xLjI0Mjk3LDMuNTYwOTRjMC4wMDEwMiwxLjEwOTQgMC4zMjM4OCwyLjE5NDY3IDAuOTI5NDMsMy4xMjQyMmMwLjAwNzQzLDAuMDExMjIgMC4wMTQ4OSwwLjAyMjQyIDAuMDIyNCwwLjAzMzU5YzAuMDk4NTgsMC4yMDM0MiAyNy44MjI4MSw1NC4xNzU1MiA4NS4wNDgxOCw1NC4xNzU1MmM1Ni45ODI1OCwwIDg0LjY2NiwtNTMuNDQxODggODUuMDAzMzksLTU0LjA5NzE0YzAuMDIyODIsLTAuMDM3MDcgMC4wNDUyMiwtMC4wNzQ0IDAuMDY3MTksLTAuMTExOThjMC42MDU1NSwtMC45Mjk1NSAwLjkyODQxLC0yLjAxNDgyIDAuOTI5NDIsLTMuMTI0MjJjLTAuMDAwMiwtMS4yODgwMiAtMC40MzQxMSwtMi41Mzg0NSAtMS4yMzE3NywtMy41NDk3NGMtMC4wMDM3MywtMC4wMDM3NCAtMC4wMDc0NiwtMC4wMDc0NyAtMC4wMTEyLC0wLjAxMTJjLTAuNTk3MzYsLTAuOTYxNjMgLTMzLjYyNTQ2LC01My43NzIzOSAtODQuNzU3MDMsLTUzLjc3MjM5ek04Niw0NS44NjY2N2MyMi4xNjUwNywwIDQwLjEzMzMzLDE3Ljk2ODI3IDQwLjEzMzMzLDQwLjEzMzMzYzAsMjIuMTY1MDcgLTE3Ljk2ODI3LDQwLjEzMzMzIC00MC4xMzMzMyw0MC4xMzMzM2MtMjIuMTY1MDcsMCAtNDAuMTMzMzMsLTE3Ljk2ODI3IC00MC4xMzMzMywtNDAuMTMzMzNjMCwtMjIuMTY1MDcgMTcuOTY4MjcsLTQwLjEzMzMzIDQwLjEzMzMzLC00MC4xMzMzM3pNODYsNjguOGMtOS40OTkzLDAgLTE3LjIsNy43MDA3IC0xNy4yLDE3LjJjMCw5LjQ5OTMgNy43MDA3LDE3LjIgMTcuMiwxNy4yYzkuNDk5MywwIDE3LjIsLTcuNzAwNyAxNy4yLC0xNy4yYzAsLTkuNDk5MyAtNy43MDA3LC0xNy4yIC0xNy4yLC0xNy4yeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')
        }


}
datePickerId.max = new Date().toISOString().split("T")[0];
datePickerId.value = new Date().toISOString().split("T")[0];