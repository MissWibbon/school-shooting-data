import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import logo from './logo.svg';
import {state, useState} from 'react';
import './App.css';
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, } from 'chart.js/auto';
import { Chart, Line, Bar, Doughnut, Bubble, Scatter  } from 'react-chartjs-2';
import data from './school-shootings-data.json';
function App() {
  let subtitle;
  const [dmMode, setDmMode] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  function dmToggle() {
    console.log(dmMode)
    document.querySelector('.react-switch-handle').addEventListener('change',
    function() {
      setDmMode(!dmMode)
      console.log(dmMode)

    })
  }
  setTimeout(dmToggle, 2000)
  let year1999 = [];
  year1999.killed = [];
  year1999.injured = [];
  let year2000 = [];
  year2000.killed = [];
  year2000.injured = [];
  let year2001 = [];
  year2001.killed = [];
  year2001.injured = [];
  let year2002 = [];
  year2002.killed = [];
  year2002.injured = [];
  let year2003 = [];
  year2003.killed = [];
  year2003.injured = [];
  let year2004 = [];
  year2004.killed = [];
  year2004.injured = [];
  let year2005 = [];
  year2005.killed = [];
  year2005.injured = [];
  let year2006 = [];
  year2006.killed = [];
  year2006.injured = [];
  let year2007 = [];
  year2007.killed = [];
  year2007.injured = [];
  let year2008 = [];
  year2008.killed = [];
  year2008.injured = [];
  let year2009 = [];
  year2009.killed = [];
  year2009.injured = [];
  let year2010 = [];
  year2010.killed = [];
  year2010.injured = [];
  let year2011 = [];
  year2011.killed = [];
  year2011.injured = [];
  let year2012 = [];
  year2012.killed = [];
  year2012.injured = [];
  let year2013 = [];
  year2013.killed = [];
  year2013.injured = [];
  let year2014 = [];
  year2014.killed = [];
  year2014.injured = [];
  let year2015 = [];
  year2015.killed = [];
  year2015.injured = [];
  let year2016 = [];
  year2016.killed = [];
  year2016.injured = [];
  let year2017 = [];
  year2017.killed = [];
  year2017.injured = [];
  let year2018 = [];
  year2018.killed = [];
  year2018.injured = [];
  let year2019 = [];
  year2019.killed = [];
  year2019.injured = [];
  let year2020 = [];
  year2020.killed = [];
  year2020.injured = [];
  let year2021 = [];
  year2021.killed = [];
  year2021.injured = [];
  let year2022 = [];
  year2022.killed = [];
  year2022.injured = [];
  
  let accidentalShootings = 0;
  let targetedShootings = 0;
  let indiscriminateShootings = 0;
  let unclearShootings = 0;
  let hostageSuicideShootings = 0;
  let publicSuicideShootings = 0;
  let maleShooter = 0;
  let femaleShooter = 0;
  let shooterAges = [];
  let shooter = {}
  shooter.white = 0
  shooter.whiteKills = 0
  shooter.black = 0
  shooter.blackKills = 0
  shooter.hispanic = 0
  shooter.hispanicKills = 0
  shooter.asian = 0
  shooter.asianKills = 0
  
  data.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
      if (key === 'race_ethnicity_shooter1' && value === 'w') {
        shooter.white = shooter.white + 1
        shooter.whiteKills = shooter.whiteKills + obj.killed
      }
      if (key === 'race_ethnicity_shooter2' && value === 'w') {
        shooter.white = shooter.white + 1
        shooter.whiteKills = shooter.whiteKills + obj.killed
      }
      if (key === 'race_ethnicity_shooter1' && value === 'b') {
        shooter.black = shooter.black + 1
        shooter.blackKills = shooter.blackKills + obj.killed
      }
      if (key === 'race_ethnicity_shooter2' && value === 'b') {
        shooter.black = shooter.black + 1
        shooter.blackKills = shooter.blackKills + obj.killed
      }
      if (key === 'race_ethnicity_shooter1' && value === 'h') {
        shooter.hispanic = shooter.hispanic + 1
        shooter.hispanicKills = shooter.hispanicKills + obj.killed
      }
      if (key === 'race_ethnicity_shooter2' && value === 'h') {
        shooter.hispanic = shooter.hispanic + 1
        shooter.hispanicKills = shooter.hispanicKills + obj.killed
      }
      if (key === 'race_ethnicity_shooter1' && value === 'ai') {
        shooter.asian = shooter.asian + 1
        shooter.asianKills = shooter.asianKills + obj.killed
      }
      if (key === 'race_ethnicity_shooter2' && value === 'ai') {
        shooter.asian = shooter.asian + 1
        shooter.asianKills = shooter.asianKills + obj.killed
      }
      if (key === 'age_shooter1' && value !== null) {
        shooterAges.push(obj.age_shooter1)
      }
      if (key === 'age_shooter2' && value !== null) {
        shooterAges.push(obj.age_shooter2)
      }
      if (key === 'gender_shooter1' && value === "m"){
        maleShooter = maleShooter + 1
      } 
      if (key === 'gender_shooter2' && value === "m"){
        maleShooter = maleShooter + 1
      } 
      if (key === 'gender_shooter1' && value === "f"){
        femaleShooter = femaleShooter + 1
      } 
      if (key === 'gender_shooter2' && value === "f"){
        femaleShooter = femaleShooter + 1
      } 
      if(key === 'shooting_type' && value === 'accidental') {
        accidentalShootings = accidentalShootings + 1
      }
      if(key === 'shooting_type' && value === 'targeted') {
        targetedShootings = targetedShootings + 1
      }
      if(key === 'shooting_type' && value === 'indiscriminate') {
        indiscriminateShootings = indiscriminateShootings + 1
      }
      if(key === 'shooting_type' && value === 'unclear') {
        unclearShootings = unclearShootings + 1
      }
      if(key === 'shooting_type' && value === 'hostage suicide') {
        hostageSuicideShootings = hostageSuicideShootings + 1
      }
      if(key === 'shooting_type' && value === 'public suicide (attempted)' || value === 'public suicide') {
        publicSuicideShootings = publicSuicideShootings + 1
      }
      if(key === 'shooting_type' && value === 'targeted and indiscriminate') {
        targetedShootings = targetedShootings + 1
        indiscriminateShootings = indiscriminateShootings + 1
      }
      if(key === 'year') {
        if (value === 1999) {
          year1999.killed.push(obj.killed) 
          year1999.injured.push(obj.injured) 
          year1999.push(obj)
        }
        if (value === 2000) {
          year2000.killed.push(obj.killed) 
          year2000.injured.push(obj.injured) 
          year2000.push(obj)
        }
        if (value === 2001) {
          year2001.killed.push(obj.killed) 
          year2001.injured.push(obj.injured) 
          year2001.push(obj)
        }
        if (value === 2002) {
          year2002.killed.push(obj.killed) 
          year2002.injured.push(obj.injured) 
          year2002.push(obj)
        }
        if (value === 2003) {
          year2003.killed.push(obj.killed) 
          year2003.injured.push(obj.injured) 
          year2003.push(obj)
        }
        if (value === 2004) {
          year2004.killed.push(obj.killed) 
          year2004.injured.push(obj.injured) 
          year2004.push(obj)
        }
        if (value === 2005) {
          year2005.killed.push(obj.killed) 
          year2005.injured.push(obj.injured) 
          year2005.push(obj)
        }
        if (value === 2006) {
          year2006.killed.push(obj.killed) 
          year2006.injured.push(obj.injured) 
          year2006.push(obj)
        }
        if (value === 2007) {
          year2007.killed.push(obj.killed) 
          year2007.injured.push(obj.injured) 
          year2007.push(obj)
        }
        if (value === 2008) {
          year2008.killed.push(obj.killed) 
          year2008.injured.push(obj.injured) 
          year2008.push(obj)
        }
        if (value === 2009) {
          year2009.killed.push(obj.killed) 
          year2009.injured.push(obj.injured) 
          year2009.push(obj)
        }
        if (value === 2010) {
          year2010.killed.push(obj.killed) 
          year2010.injured.push(obj.injured) 
          year2010.push(obj)
        }
        if (value === 2011) {
          year2011.killed.push(obj.killed) 
          year2011.injured.push(obj.injured) 
          year2011.push(obj)
        }
        if (value === 2012) {
          year2012.killed.push(obj.killed) 
          year2012.injured.push(obj.injured) 
          year2012.push(obj)
        }
        if (value === 2013) {
          year2013.killed.push(obj.killed) 
          year2013.injured.push(obj.injured) 
          year2013.push(obj)
        }
        if (value === 2014) {
          year2014.killed.push(obj.killed) 
          year2014.injured.push(obj.injured) 
          year2014.push(obj)
        }
        if (value === 2015) {
          year2015.killed.push(obj.killed) 
          year2015.injured.push(obj.injured) 
          year2015.push(obj)
        }
        if (value === 2016) {
          year2016.killed.push(obj.killed) 
          year2016.injured.push(obj.injured) 
          year2016.push(obj)
        }
        if (value === 2017) {
          year2017.killed.push(obj.killed) 
          year2017.injured.push(obj.injured) 
          year2017.push(obj)
        }
        if (value === 2018) {
          year2018.killed.push(obj.killed) 
          year2018.injured.push(obj.injured) 
          year2018.push(obj)
        }
        if (value === 2019) {
          year2019.killed.push(obj.killed) 
          year2019.injured.push(obj.injured) 
          year2019.push(obj)
        }
        if (value === 2020) {
          year2020.killed.push(obj.killed) 
          year2020.injured.push(obj.injured) 
          year2020.push(obj)
        }
        if (value === 2021) {
          year2021.killed.push(obj.killed)
          year2021.injured.push(obj.injured) 
          year2021.push(obj)
        }
        if (value === 2022) {
          year2022.killed.push(obj.killed) 
          year2022.injured.push(obj.injured) 
          year2022.push(obj)
        }
      }
    });
  });
  
  console.log(shooterAges)
    return (
      <div className="App" style={{position: 'relative', height:40 + 'vh', width:98 + 'vw'}}>
        <div className="container-list">
  
          <div className="line-chart-container">
            <Bar 
              datasetIdKey='id'
              options={{
                scales: {
                  x: {
                    stacked: false,
                    grid: {
                      color: !dmMode ? '#c4c3c3' : '#282828',
                    }
                  },
                  y: {
                    stacked: false,
                    grid: {
                      color: !dmMode ? '#c4c3c3' : '#282828',
                    }
                  }
                },
                plugins: {
                  title: {
                    display: true,
                    text: `${data.length} School Shootings`
                  },
                  legend: {
                    display: true,
                    position: "bottom",
                    title: 'test'
                  },
                  subtitle: {
                      display: true,
                      text: '1999-2022'
                  }
                }
              }}
              data={{
                labels: ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
                datasets: [
                  {
                    id: 1,
                    label: 'School Shootings',
                    fill: true,
                    data: [year1999.length, year2000.length, year2001.length,
                    year2002.length, year2003.length, year2004.length, year2005.length,
                    year2006.length, year2007.length, year2008.length, year2009.length,
                    year2010.length, year2011.length, year2012.length, year2013.length,
                    year2014.length, year2015.length, year2016.length, year2017.length,
                    year2018.length, year2019.length, year2020.length, year2021.length,
                    year2022.length],
                    backgroundColor: [
                      'rgba(255, 159, 64, 0.4)'
                    ],
                    borderColor: [
                      'rgb(255, 159, 64)'
                    ],
                    borderWidth: 1
                  },
                  {
                    id: 2,
                    label: 'Killed',
                    fill: true,
                    data: [year1999.killed.reduce((partialSum, a) => partialSum + a, 0), year2000.killed.reduce((partialSum, a) => partialSum + a, 0), year2001.killed.reduce((partialSum, a) => partialSum + a, 0),
                    year2002.killed.reduce((partialSum, a) => partialSum + a, 0), year2003.killed.reduce((partialSum, a) => partialSum + a, 0), year2004.killed.reduce((partialSum, a) => partialSum + a, 0), year2005.killed.reduce((partialSum, a) => partialSum + a, 0),
                    year2006.killed.reduce((partialSum, a) => partialSum + a, 0), year2007.killed.reduce((partialSum, a) => partialSum + a, 0), year2008.killed.reduce((partialSum, a) => partialSum + a, 0), year2009.killed.reduce((partialSum, a) => partialSum + a, 0),
                    year2010.killed.reduce((partialSum, a) => partialSum + a, 0), year2011.killed.reduce((partialSum, a) => partialSum + a, 0), year2012.killed.reduce((partialSum, a) => partialSum + a, 0), year2013.killed.reduce((partialSum, a) => partialSum + a, 0),
                    year2014.killed.reduce((partialSum, a) => partialSum + a, 0), year2015.killed.reduce((partialSum, a) => partialSum + a, 0), year2016.killed.reduce((partialSum, a) => partialSum + a, 0), year2017.killed.reduce((partialSum, a) => partialSum + a, 0),
                    year2018.killed.reduce((partialSum, a) => partialSum + a, 0), year2019.killed.reduce((partialSum, a) => partialSum + a, 0), year2020.killed.reduce((partialSum, a) => partialSum + a, 0), year2021.killed.reduce((partialSum, a) => partialSum + a, 0),
                    year2022.killed.reduce((partialSum, a) => partialSum + a, 0)],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.4)'
                    ],
                    borderColor: [
                      'rgb(255, 99, 132)'
                    ],
                    borderDash: [5, 5],
                    borderWidth: 1
                  },
                  
                  {
                    id: 3,
                    label: 'Injured',
                    fill: true,
                    data: [year1999.injured.reduce((partialSum, a) => partialSum + a, 0), year2000.injured.reduce((partialSum, a) => partialSum + a, 0), year2001.injured.reduce((partialSum, a) => partialSum + a, 0),
                    year2002.injured.reduce((partialSum, a) => partialSum + a, 0), year2003.injured.reduce((partialSum, a) => partialSum + a, 0), year2004.injured.reduce((partialSum, a) => partialSum + a, 0), year2005.injured.reduce((partialSum, a) => partialSum + a, 0),
                    year2006.injured.reduce((partialSum, a) => partialSum + a, 0), year2007.injured.reduce((partialSum, a) => partialSum + a, 0), year2008.injured.reduce((partialSum, a) => partialSum + a, 0), year2009.injured.reduce((partialSum, a) => partialSum + a, 0),
                    year2010.injured.reduce((partialSum, a) => partialSum + a, 0), year2011.injured.reduce((partialSum, a) => partialSum + a, 0), year2012.injured.reduce((partialSum, a) => partialSum + a, 0), year2013.injured.reduce((partialSum, a) => partialSum + a, 0),
                    year2014.injured.reduce((partialSum, a) => partialSum + a, 0), year2015.injured.reduce((partialSum, a) => partialSum + a, 0), year2016.injured.reduce((partialSum, a) => partialSum + a, 0), year2017.injured.reduce((partialSum, a) => partialSum + a, 0),
                    year2018.injured.reduce((partialSum, a) => partialSum + a, 0), year2019.injured.reduce((partialSum, a) => partialSum + a, 0), year2020.injured.reduce((partialSum, a) => partialSum + a, 0), year2021.injured.reduce((partialSum, a) => partialSum + a, 0),
                    year2022.injured.reduce((partialSum, a) => partialSum + a, 0)],
                    backgroundColor: [
                      'rgba(153, 102, 255, 0.4)'
                    ],
                    borderColor: [
                      'rgb(153, 102, 255)'
                    ],
                    borderDash: [5, 5],
                    borderWidth: 1
                  }
                ],
              }}
            />
          </div>
          <div className="doughnut-chart-container">
            <Doughnut data={{
                labels: ['Male shooter', 'Female shooter', 'Unidentified'],
                datasets: [
                  {
                    id: 7,
                    label: '',
                    axis: 'y',
                    fill: false,
                    data: [maleShooter, femaleShooter, data.length-maleShooter-femaleShooter],
                    backgroundColor: [
                      'rgba(153, 102, 255, 0.4)',
                      'rgba(75, 192, 192, 0.4)',
                      'rgba(201, 203, 207, 0.4)'
                    ],
                    borderColor: [
                      'rgb(153, 102, 255)',
                      'rgb(75, 192, 192)',
                      'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                  }
                ],
              }} />
              <Doughnut data={{
                labels: ['Targeted', 'Accidental', 'Indiscriminate', 'Hostage Suicide', 'Public Suicide', 'Unclear'],
                datasets: [
                  {
                    id: 6,
                    label: '',
                    axis: 'y',
                    fill: false,
                    data: [targetedShootings, accidentalShootings, indiscriminateShootings, hostageSuicideShootings, publicSuicideShootings, unclearShootings],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.4)',
                      'rgba(255, 159, 64, 0.4)',
                      'rgba(255, 205, 86, 0.4)',
                      'rgba(75, 192, 192, 0.4)',
                      'rgba(54, 162, 235, 0.4)',
                      'rgba(201, 203, 207, 0.4)'
  
                    ],
                    borderColor: [
                      'rgb(255, 99, 132)',
                      'rgb(255, 159, 64)',
                      'rgb(255, 205, 86)',
                      'rgb(75, 192, 192)',
                      'rgb(54, 162, 235)',
                      'rgb(201, 203, 207)'
  
                    ],
                    borderWidth: 1
                  }
                ],
              }} />
              <Doughnut data={{
                labels: ['White shooter', 'Black shooter', 'Hispanic shooter', 'Asian shooter'],
                datasets: [
                  {
                    id: 8,
                    label: '',
                    axis: 'y',
                    fill: false,
                    data: [shooter.white, shooter.black, shooter.hispanic, shooter.asian],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.4)',
                      'rgba(255, 205, 86, 0.4)',
                      'rgba(75, 192, 192, 0.4)',
                      'rgba(201, 203, 207, 0.4)'
  
                    ],
                    borderColor: [
                      'rgb(255, 99, 132)',
                      'rgb(255, 205, 86)',
                      'rgb(75, 192, 192)',
                      'rgb(201, 203, 207)'
  
                    ],
                    borderWidth: 1
                  }
                ],
              }} />
              <Doughnut data={{
                labels: ['White shooter fatalities', 'Black shooter fatalities', 'Hispanic shooter fatalities', 'Asian shooter fatalities'],
                datasets: [
                  {
                    id: 4,
                    label: '',
                    axis: 'y',
                    fill: false,
                    data: [shooter.whiteKills, shooter.blackKills, shooter.hispanicKills, shooter.asianKills],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.4)',
                      'rgba(255, 205, 86, 0.4)',
                      'rgba(75, 192, 192, 0.4)',
                      'rgba(201, 203, 207, 0.4)'
  
                    ],
                    borderColor: [
                      'rgb(255, 99, 132)',
                      'rgb(255, 205, 86)',
                      'rgb(75, 192, 192)',
                      'rgb(201, 203, 207)'
  
                    ],
                    borderWidth: 1
                  }
                ],
              }} />
          </div>
              <Scatter 
              data={{
                labels: ['Ages'],
                datasets: [
                  {
                    id: 5,
                    label: '',
                    axis: 'y',
                    fill: false,
                    data: [{x: shooterAges[0]},{y:shooterAges[1]}],
                    backgroundColor: [
                      'rgba(153, 102, 255, 0.4)'
                    ],
                    borderColor: [
                      'rgb(153, 102, 255)'
                    ],
                    borderWidth: 1
                  }
                ],
              }}
              options={{
                scales: {
                  x: {
                    stacked: false,
                    grid: {
                      color: !dmMode ? '#c4c3c3' : '#282828',
                    }
                  },
                  y: {
                    stacked: false,
                    grid: {
                      color: !dmMode ? '#c4c3c3' : '#282828',
                    }
                  }
                },
              }} />
        </div>
        <p>The average age of a school shooter is <span className="shooterAge">{Math.round(shooterAges.reduce((a, b) => a + b) / shooterAges.length * 100) / 100}</span> years old.</p>
      </div>
    );
  }
  
  export default App;
  
