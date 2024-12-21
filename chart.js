const ctx = document.getElementById('skills_chart').getContext('2d');

const labels = [
  'Html/Css', 'Javascript', 'Python', 'Sql', 'English', 'Communication', 'Canva'
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Skills',
    data: [70, 45, 40, 20, 80, 78, 55],
    backgroundColor: [
      'rgba(255,99,132,0.2)', 'rgba(255,159,64,0.2)', 'rgba(255,205,86,0.2)',
      'rgba(75,192,192,0.2)', 'rgba(54,162,235,0.2)', 'rgba(153,102,255,0.2)'
    ],
    borderColor: [
      'rgb(255,99,132)', 'rgb(255,159,64)', 'rgb(255,205,86)',
      'rgb(75,192,192)', 'rgb(54,162,235)', 'rgb(153,102,255)'
    ],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const skills_chart = new Chart(ctx, config);
