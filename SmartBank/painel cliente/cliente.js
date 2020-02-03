  // Load the Visualization API and the corechart package.
  
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Contas', 3],
      ['Lazer', 1],
      ['Transporte', 1],
      ['Supermercado', 1],
      ['Serviços', 2]
    ]);

    // Set chart options
    var options = {'title':'Despesas',
                    'is3D':true,
                   'width':400,
                   'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart2);

  function drawChart2() {
    var data = google.visualization.arrayToDataTable([
      ['Data', 'Despesas', 'Ganhos'],
      ['07/01',  50,      500],
      ['15/01',  250,      170],
      ['25/01',  330,       310],
      ['30/01',  1000,      500]
    ]);

    if(width < 750){
        var options = {
            title: 'Transações',
            curveType: 'function',
            legend: { position: 'bottom' },
            width: width,
            height: 300
          }
    }else{
        var options = {
            title: 'Transações',
            curveType: 'function',
            legend: { position: 'bottom' },
            width: 750,
            height: 300
          }
    }

    var chart = new google.visualization.LineChart(document.getElementById('chart_ganhos'));

    chart.draw(data, options);
  }

  var i = 0;
  const btnHide = document.querySelector("#btnHide");
  const saldo = document.querySelector("#saldo");
  var Saldo = 0;
  btnHide.addEventListener("click",()=>{
    i++;
    if(i % 2 ==  0){
        btnHide.src = "images/kisspng-eye-computer-icons-clip-art-responsive-vector-5ad9be6419d181.1961868815242194921058.png";
        saldo.innerHTML = Saldo;
    }if(i % 2 !== 0){
        btnHide.src = "images/FAVPNG_vector-graphics-human-eye-psd_TNin3Yay.png";
        Saldo = saldo.innerHTML;
        console.log(Saldo);
        saldo.innerHTML = "********";
    }
  });
  