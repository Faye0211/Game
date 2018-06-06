

window.onload = function () {
  var x, y, row, col, max1, max2, a1 = 0, b1 = 0, c1 = 0, d1 = 0, a2 = 0, b2 = 0, c2 = 0, d2 = 0;
  var arr1 = [];
  var arr2 = [];
  var flag = true;
  var sum = 1;
  var times = 0;
  var qipan = document.querySelector('.qipan');
  var qizi1 = document.querySelector('.qizi1');
  var qizi2 = document.querySelector('.qizi2');


  //生成横线；
  var hengxianbox = document.createElement('div');
  hengxianbox.classList.add('hengxianbox');
  for (var i = 0; i < 12; i++) {
    var div1 = document.createElement('div');
    hengxianbox.appendChild(div1);
  }
  qipan.appendChild(hengxianbox);
  //横线结束

  //竖线开始：
  var shuxianbox = document.createElement('div');
  shuxianbox.classList.add('shuxianbox');
  for (var i = 0; i < 16; i++) {
    var div1 = document.createElement('div');
    shuxianbox.appendChild(div1);
  }
  qipan.appendChild(shuxianbox);
  //竖线结束

  //声明一个二维数组用于存储每个棋盘位置的状态
  var qzarr = new Array(11);
  for (var i = 0; i < qzarr.length; i++) {
    qzarr[i] = new Array(15);
    for (var j = 0; j < qzarr[i].length; j++) {
      qzarr[i][j] = 0;
    }
  }
  //二维数组声明结束

  //下棋事件
  qipan.onclick = function (e) {
    e = e || window.event;
    x = getPage(e).pageX - this.offsetLeft - 10;
    y = getPage(e).pageY - this.offsetTop - 10;
    x = zuobiao(x, col)[0];
    col = zuobiao(x, col)[1];
    y = zuobiao(y, row)[0];
    row = zuobiao(y, row)[1];
    if (row >= 0 && row < 11 && qzarr[row][col] == 0) {
      // times++;
      // if (flag) {
      //   addqz('qizi1');
      //   judge(1);
      // } else {
      //   addqz('qizi2');
      //   judge(2);
      // }
      // pingju();
      addqz('qizi1');
      judge(1);
      pingju();
      console.log(flag);
      console.log(arr1);
      console.log(arr2);
      console.log(sum);
      console.log(a1, b1, c1, d1);
      console.log(a2, b2, c2, d2);


      if (sum < 5) {
        setTimeout(function () {
          max1 = Math.max(a1, b1, c1, d1);
          max2 = Math.max(a2, b2, c2, d2);
          if (max1 > max2) {
            dubaiqi();
          } else {
            duheiqi();
          }

        }, 200)
      }


    }


  }
  //下棋事件结束

  //堵白棋
  function dubaiqi() {
    if (a1 == max1 && (((arr1[0] != undefined) && (arr1[1] != undefined) && qzarr[arr1[0]][arr1[1]] == 0) || ((arr1[2] != undefined) && (arr1[3] != undefined) && qzarr[arr1[2]][arr1[3]] == 0))) {
      if ((arr1[0] != undefined) && (arr1[1] != undefined) && qzarr[arr1[0]][arr1[1]] == 0) {
        aixiaqi1(0, 1);
      } else {
        aixiaqi1(2, 3);
      }
    } else if (b1 == max1 && (((arr1[4] != undefined) && (arr1[5] != undefined) && qzarr[arr1[4]][arr1[5]] == 0) || ((arr1[6] != undefined) && (arr1[7] != undefined) && qzarr[arr1[6]][arr1[7]] == 0))) {
      if ((arr1[4] != undefined) && (arr1[5] != undefined) && qzarr[arr1[4]][arr1[5]] == 0) {
        aixiaqi1(4, 5);
      } else {
        aixiaqi1(6, 7);
      }
    } else if (c1 == max1 && (((arr1[8] != undefined) && (arr1[9] != undefined) && qzarr[arr1[8]][arr1[9]] == 0) || ((arr1[10] != undefined) && (arr1[11] != undefined) && qzarr[arr1[10]][arr1[11]] == 0))) {
      if ((arr1[8] != undefined) && (arr1[9] != undefined) && qzarr[arr1[8]][arr1[9]] == 0) {
        aixiaqi1(8, 9);
      } else {
        aixiaqi1(10, 11);
      }
    } else if (d1 == max1 && (((arr1[12] != undefined) && (arr1[13] != undefined) && qzarr[arr1[12]][arr1[13]] == 0) || ((arr1[14] != undefined) && (arr1[15] != undefined) && qzarr[arr1[14]][arr1[15]] == 0))) {
      if ((arr1[12] != undefined) && (arr1[13] != undefined) && qzarr[arr1[12]][arr1[13]] == 0) {
        aixiaqi1(12, 13);
      } else {
        aixiaqi1(14, 15);
      }
    } else {
      duheiqi();
    }
  }

  //堵黑棋
  function duheiqi() {
    if (a2 == max2 && (((arr2[0] != undefined) && (arr2[1] != undefined) && qzarr[arr2[0]][arr2[1]] == 0) || ((arr2[2] != undefined) && (arr2[3] != undefined) && qzarr[arr2[2]][arr2[3]] == 0))) {
      if ((arr2[0] != undefined) && (arr2[1] != undefined) && qzarr[arr2[0]][arr2[1]] == 0) {
        aixiaqi2(0, 1);
      } else {
        aixiaqi2(2, 3);
      }
    } else if (b2 == max2 && (((arr2[4] != undefined) && (arr2[5] != undefined) && qzarr[arr2[4]][arr2[5]] == 0) || ((arr2[6] != undefined) && (arr2[7] != undefined) && qzarr[arr2[6]][arr2[7]] == 0))) {
      if ((arr2[4] != undefined) && (arr2[5] != undefined) && qzarr[arr2[4]][arr2[5]] == 0) {
        aixiaqi2(4, 5);
      } else {
        aixiaqi2(6, 7);
      }
    } else if (c2 == max2 && (((arr2[8] != undefined) && (arr2[9] != undefined) && qzarr[arr2[8]][arr2[9]] == 0) || ((arr2[10] != undefined) && (arr2[11] != undefined) && qzarr[arr2[10]][arr2[11]] == 0))) {
      if ((arr2[8] != undefined) && (arr2[9] != undefined) && qzarr[arr2[8]][arr2[9]] == 0) {
        aixiaqi2(8, 9);
      } else {
        aixiaqi2(10, 11);
      }
    } else if (d2 == max2 && (((arr2[12] != undefined) && (arr2[13] != undefined) && qzarr[arr2[12]][arr2[13]] == 0) || ((arr2[14] != undefined) && (arr2[15] != undefined) && qzarr[arr2[14]][arr2[15]] == 0))) {
      if ((arr2[12] != undefined) && (arr2[13] != undefined) && qzarr[arr2[12]][arr2[13]] == 0) {
        aixiaqi2(12, 13);
      } else {
        aixiaqi2(14, 15);
      }
    } else {
      dubaiqi();
    }
  }






  function aixiaqi1(ro, co) {
    console.log('max1:' + max1);
    console.log('max2:' + max2);
    console.log('ro:' + ro);
    console.log('co:' + co);
    row = arr1[ro];
    col = arr1[co];
    x = (col + 1) * 50;
    y = (row + 1) * 50;
    addqz('qizi2');
    judge(2);
    pingju();
  }
  function aixiaqi2(ro, co) {
    console.log('max1:' + max1);
    console.log('max2:' + max2);
    console.log('ro:' + ro);
    console.log('co:' + co);
    row = arr2[ro];
    col = arr2[co];
    x = (col + 1) * 50;
    y = (row + 1) * 50;
    addqz('qizi2');
    judge(2);
    pingju();
  }





  // 计算坐标值
  function zuobiao(axix, coord) {
    if (axix % 50 > 25) {
      axix = axix - axix % 50 + 50;
      coord = Math.ceil(axix / 50) - 1;
    } else {
      axix = axix - axix % 50;
      coord = Math.floor(axix / 50) - 1;
    }
    var arr = [];
    arr[0] = axix;
    arr[1] = coord;
    return arr;
  }

  // 计算坐标值结束
  //添加棋子
  function addqz(qzstring) {
    var qz = document.createElement('div');
    qz.classList.add(qzstring)
    qz.style.left = x + 'px';
    qz.style.top = y + 'px';
    qipan.appendChild(qz);
    qzarr[row][col] = (flag == true ? 1 : 2);
    times++;
    flag = !flag;
    console.log('qzarr:' + qzarr[row][col]);
    console.log(times);
  }
  //添加棋子结束

  //平局
  function pingju() {
    if (times >= 165) {
      document.querySelector('.zhexiubu').style.display = 'block';
      document.querySelector('.querenbox').style.display = 'block';
      document.querySelector('.querenbox>.shengli').innerHTML = "平局了，是否要再来一局？";
      return;
    }
  }
  //平局结束
  // 游戏结束效果
  function gameover(num) {
    document.querySelector('.zhexiubu').style.display = 'block';
    document.querySelector('.querenbox').style.display = 'block';
    document.querySelector('.querenbox>.shengli').innerHTML = (num == 1 ? "你" : "AI") + "赢了，是否要再来一局？";
  }
  document.querySelector('.querenbox>input:first-of-type').onclick = function () {
    location.reload();
  }
  document.querySelector('.querenbox>input:nth-of-type(2)').onclick = function () {
    window.close();
  }

  //判断胜负
  function judge(num) {
    if (judgex(num)) {
      gameover(num);
      return;
    } else if (judgey(num)) {
      gameover(num);
      return;
    } else if (judgeytx(num)) {
      gameover(num);
      return;
    } else if (judgexty(num)) {
      gameover(num);
      return;
    } else {
      return;
    }
  }
  //判断胜负结束

  //判断四个方向是否五珠连子
  function judgex(num) {
    for (var i = col + 1; i < 15; i++) {
      if (qzarr[row][i] == num) {
        sum++;
      } else {
        if (num == 1) {
          arr1[0] = row;
          arr1[1] = i;
        } else {
          arr2[0] = row;
          arr2[1] = i;
        }
        break;
      }
    }
    for (var j = col - 1; j >= 0; j--) {
      if (qzarr[row][j] == num) {
        sum++;
      } else {
        if (num == 1) {
          arr1[2] = row;
          arr1[3] = j;
        } else {
          arr2[2] = row;
          arr2[3] = j;
        }
        break;
      }
    }
    if (sum >= 5) {
      return true;
    } else {
      if (num == 1) {
        a1 = sum;
      } else {
        a2 = sum;
      }
      sum = 1;
      return false;
    }
  }
  function judgey(num) {
    for (var i = row + 1; i < 11; i++) {
      if (qzarr[i][col] == num) {
        sum++;
      } else {
        if (num == 1) {
          arr1[4] = i;
          arr1[5] = col;
        } else {
          arr2[4] = i;
          arr2[5] = col;
        }
        break;
      }
    }
    for (var j = row - 1; j >= 0; j--) {
      if (qzarr[j][col] == num) {
        sum++;
      } else {
        if (num == 1) {
          arr1[6] = j;
          arr1[7] = col;
        } else {
          arr2[6] = j;
          arr2[7] = col;
        }
        break;
      }
    }
    if (sum >= 5) {
      return true;
    } else {
      if (num == 1) {
        b1 = sum;
      } else {
        b2 = sum;
      }
      sum = 1;
      return false;
    }
  }
  function judgeytx(num) {
    var i = row - 1;
    var j = col + 1;
    while (i >= 0 && j < 15) {
      if (qzarr[i][j] == num) {
        sum++;
        i--;
        j++;
      } else {
        if (num == 1) {
          arr1[8] = i;
          arr1[9] = j;
        } else {
          arr2[8] = i;
          arr2[9] = j;
        }
        break;
      }
    }
    i = row + 1;
    j = col - 1;
    while (i < 11 && j >= 0) {
      if (qzarr[i][j] == num) {
        sum++;
        i++;
        j--;
      } else {
        if (num == 1) {
          arr1[10] = i;
          arr1[11] = j;
        } else {
          arr2[10] = i;
          arr2[11] = j;
        }
        break;
      }
    }
    if (sum >= 5) {
      return true;
    } else {
      if (num == 1) {
        c1 = sum;
      } else {
        c2 = sum;
      }
      sum = 1;
      return false;
    }
  }
  function judgexty(num) {
    var i = row + 1;
    var j = col + 1;
    while (i < 11 && j < 15) {
      if (qzarr[i][j] == num) {
        sum++;
        i++;
        j++;
      } else {
        if (num == 1) {
          arr1[12] = i;
          arr1[13] = j;
        } else {
          arr2[12] = i;
          arr2[13] = j;
        }
        break;
      }
    }
    i = row - 1;
    j = col - 1;
    while (i >= 0 && j >= 0) {
      if (qzarr[i][j] == num) {
        sum++;
        i--;
        j--;
      } else {
        if (num == 1) {
          arr1[14] = i;
          arr1[15] = j;
        } else {
          arr2[14] = i;
          arr2[15] = j;
        }
        break;
      }
    }
    if (sum >= 5) {
      return true;
    } else {
      if (num == 1) {
        d1 = sum;
      } else {
        d2 = sum;
      }
      sum = 1;
      return false;
    }
  }
  // 四个方向判断结束


  function getPage(e) {
    e = e || window.event;
    return {
      pageX: e.pageX || e.clientX + document.documentElement.scrollLeft,
      pageY: e.pageY || e.clientY + document.documentElement.scrollTop
    }
  }


}