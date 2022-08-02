import React from 'react';
import { BiExpand } from 'react-icons/bi';
import { GiContract } from 'react-icons/gi';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import logo from './logo.svg';
import {state, useState} from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
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
    const [selectedYear, setSelectedYear] = useState('')
    const [shootingYear, setShootingYear] = useState([])
    let monthCasualties = {
      'January': {
        shootings: 0,
        casualties: 0,
        deaths: 0
      },
      'February': {
        shootings: 0,
        casualties: 0,
        deaths: 0
      },
      'March': {
        shootings: 0,
        casualties: 0,
        deaths: 0
      },
      'April': {
        shootings: 0,
        casualties: 0,
        deaths: 0
      },
      'May': {
        shootings: 0,
        casualties: 0,
        deaths: 0
      },
      'June': {
        shootings: 0,
        casualties: 0,
        deaths: 0
      },
      'July': {
        shootings: 0,
        casualties: 0,
        deaths: 0
      },
      'August': {
        shootings: 0,
        casualties: 0,
        deaths: 0
      },
      'September': {
        shootings: 0,
        casualties: 0,
        deaths: 0
      },
      'October': {
        shootings: 0,
        casualties: 0,
        deaths: 0
      },
      'November': {
        shootings: 0,
        casualties: 0,
        deaths: 0
      },
      'December': {
        shootings: 0,
        casualties: 0,
        deaths: 0
      }
    }
  const [showZoom, setShowZoom] = useState(true)
    function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
    setShootingYear(dataSet[selectedYear])

  }

  function closeModal() {
    setIsOpen(false);
  }
  function dmToggle() {
    document.querySelector('.react-switch-handle').addEventListener('change',
    function() {
      setDmMode(!dmMode)

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
  shooter.weapon = []
  shooter.weaponSource = []

  data.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
      if (key === 'date') {
        let date = value.split('/')
        let month = Number(date[0])
        console.log(month)
        if(month == 1) {
          console.log(obj.casualties)
          monthCasualties.January.shootings = monthCasualties.January.shootings + 1
          monthCasualties.January.casualties = monthCasualties.January.casualties + Number(obj.casualties)
          monthCasualties.January.deaths = monthCasualties.January.deaths + Number(obj.killed)
        }
        if(month === 2) {
          monthCasualties.February.shootings = monthCasualties.February.shootings + 1
          monthCasualties.February.casualties = monthCasualties.February.casualties + Number(obj.casualties)
          monthCasualties.February.deaths = monthCasualties.February.deaths + Number(obj.killed)
        }
        if(month === 3) {
          monthCasualties.March.shootings = monthCasualties.March.shootings + 1
          monthCasualties.March.casualties = monthCasualties.March.casualties + Number(obj.casualties)
          monthCasualties.March.deaths = monthCasualties.March.deaths + Number(obj.killed)
        }
        if(month === 4) {
          monthCasualties.April.shootings = monthCasualties.April.shootings + 1
          monthCasualties.April.casualties = monthCasualties.April.casualties + Number(obj.casualties)
          monthCasualties.April.deaths = monthCasualties.April.deaths + Number(obj.killed)
        }
        if(month === 5) {
          monthCasualties.May.shootings = monthCasualties.May.shootings + 1
          monthCasualties.May.casualties = monthCasualties.May.casualties + Number(obj.casualties)
          monthCasualties.May.deaths = monthCasualties.May.deaths + Number(obj.killed)
        }
        if(month === 6) {
          monthCasualties.June.shootings = monthCasualties.June.shootings + 1
          monthCasualties.June.casualties = monthCasualties.June.casualties + Number(obj.casualties)
          monthCasualties.June.deaths = monthCasualties.June.deaths + Number(obj.killed)
        }
        if(month === 7) {
          monthCasualties.July.shootings = monthCasualties.July.shootings + 1
          monthCasualties.July.casualties = monthCasualties.July.casualties + Number(obj.casualties)
          monthCasualties.July.deaths = monthCasualties.July.deaths + Number(obj.killed)
        }
        if(month === 8) {
          monthCasualties.August.shootings = monthCasualties.August.shootings + 1
          monthCasualties.August.casualties = monthCasualties.August.casualties + Number(obj.casualties)
          monthCasualties.August.deaths = monthCasualties.August.deaths + Number(obj.killed)
        }
        if(month === 9) {
          monthCasualties.September.shootings = monthCasualties.September.shootings + 1
          monthCasualties.September.casualties = monthCasualties.September.casualties + Number(obj.casualties)
          monthCasualties.September.deaths = monthCasualties.September.deaths + Number(obj.killed)
        }
        if(month === 10) {
          monthCasualties.October.shootings = monthCasualties.October.shootings + 1
          monthCasualties.October.casualties = monthCasualties.October.casualties + Number(obj.casualties)
          monthCasualties.October.deaths = monthCasualties.October.deaths + Number(obj.killed)
        }
        if(month === 11) {
          monthCasualties.November.shootings = monthCasualties.November.shootings + 1
          monthCasualties.November.casualties = monthCasualties.November.casualties + Number(obj.casualties)
          monthCasualties.November.deaths = monthCasualties.November.deaths + Number(obj.killed)
        }
        if(month === 12) {
          monthCasualties.December.shootings = monthCasualties.December.shootings + 1
          monthCasualties.December.casualties = monthCasualties.December.casualties + Number(obj.casualties)
          monthCasualties.December.deaths = monthCasualties.December.deaths + Number(obj.killed)
        }
      }
      if (key === 'weapon') {
        shooter.weapon.push(obj.weapon)
      }
      if (key === 'weapon_source' && value !== null || key === 'weapon_source' && value !== undefined) {
        shooter.weaponSource.push(obj.weapon_source)
      }
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
  console.log(monthCasualties)
  const [dataSet, setDataSet] = useState({
    '1999': year1999,
    '2000': year2000,
    '2001': year2001,
    '2002': year2002,
    '2003': year2003,
    '2004': year2004,
    '2005': year2005,
    '2006': year2006,
    '2007': year2007,
    '2008': year2008,
    '2009': year2009,
    '2010': year2010,
    '2011': year2011,
    '2012': year2012,
    '2013': year2013,
    '2014': year2014,
    '2015': year2015,
    '2016': year2016,
    '2017': year2017,
    '2018': year2018,
    '2019': year2019,
    '2020': year2020,
    '2021': year2021,
    '2022': year2022
  })
  //console.log(shooter.weapon)
  //console.log(shooter.weaponSource)
  function zoomOutChart() {
    let chart = document.querySelector('.line-chart-container')
    chart.classList.add('expanded')
    setShowZoom(false)
  }
  function zoomInChart() {
    let chart = document.querySelector('.line-chart-container')
    chart.classList.remove('expanded')
    setShowZoom(true)
  }
    return (
      <div className="App" style={{position: 'relative', height:40 + 'vh', width:98 + 'vw'}}>
          <span className="copyright">Data from <a href="https://github.com/washingtonpost/data-school-shootings/blob/master/school-shootings-data.csv " target="_blank">washingtonpost</a></span>
        <div className="container-list">
          <div className="line-chart-container">
            <div className="expand-chart">
            {showZoom ? <BiExpand onClick={zoomOutChart}/>
            : <GiContract onClick={zoomInChart}/>
            }
            </div>
            <Bar 
              id='barChart'
              datasetIdKey='id'
              options={{
                onClick: function(evt, element) {
                  if(element.length > 0){
                    let year = 1999;
                    var ind = element[0].index;
                    setSelectedYear(year + ind)
                    let yearString = 'year' + selectedYear.toString()
                    setShootingYear(dataSet[selectedYear])
                    setTimeout(setShootingYear(dataSet[selectedYear]), 4000)
                    openModal()
                  }
                },
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
        <p className="averageAge">The average age of a school shooter is <span className="shooterAge">{Math.round(shooterAges.reduce((a, b) => a + b) / shooterAges.length * 100) / 100}</span> years old.</p>
        <Bar 
          id='monthChart'
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
                text: `Shootings per month`
              },
              legend: {
                display: true,
                position: "bottom",
                title: 'test'
              },
            }
          }}
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
              {
              id: 9,
              label: 'Shootings',
              fill: true,
              data: [
                monthCasualties.January.shootings, monthCasualties.February.shootings, monthCasualties.March.shootings, monthCasualties.April.shootings,
                monthCasualties.May.shootings, monthCasualties.June.shootings,monthCasualties.July.shootings,monthCasualties.August.shootings,
                monthCasualties.September.shootings, monthCasualties.October.shootings, monthCasualties.November.shootings, monthCasualties.December.shootings
                ],
                backgroundColor: [
                      'rgba(255, 159, 64, 0.4)'
                    ],
                    borderColor: [
                      'rgb(255, 159, 64)'
                    ],
                    borderWidth: 1
              },{
              id: 10,
              label: 'Casualties',
              fill: true,
              data: [
                monthCasualties.January.casualties, monthCasualties.February.casualties, monthCasualties.March.casualties, monthCasualties.April.casualties,
                monthCasualties.May.casualties, monthCasualties.June.casualties,monthCasualties.July.casualties,monthCasualties.August.casualties,
                monthCasualties.September.casualties, monthCasualties.October.casualties, monthCasualties.November.casualties, monthCasualties.December.casualties
                ],
                backgroundColor: [
                  'rgba(153, 102, 255, 0.4)'
                ],
                borderColor: [
                  'rgb(153, 102, 255)'
                ],
                borderDash: [5, 5],
                borderWidth: 1
              },
              {
                id: 11,
                label: 'Deaths',
                fill: true,
                data: [
                  monthCasualties.January.deaths, monthCasualties.February.deaths, monthCasualties.March.deaths, monthCasualties.April.deaths,
                  monthCasualties.May.deaths, monthCasualties.June.deaths, monthCasualties.July.deaths ,monthCasualties.August.deaths,
                  monthCasualties.September.deaths, monthCasualties.October.deaths, monthCasualties.November.deaths, monthCasualties.December.deaths
                ],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.4)'
                ],
                borderColor: [
                  'rgb(255, 99, 132)'
                ],
                
                borderDash: [5, 5],
                borderWidth: 1
              },
            ]
          }}
          
        />
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{selectedYear}</h2>
          <CloseButton id='closeModal' onClick={closeModal}/>
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                <th>School</th>
                <th>State</th>
                <th>City</th>
                <th>Casualties</th>
                <th>Deaths</th>
                <th>Shooting type</th>
                <th>Weapon</th>
                <th>Weapon Source</th>
                <th>Shooter Race</th>
                <th>Shooter Age</th>
                <th>Shooter Killed</th>
              </tr>
              {shootingYear ? 
                shootingYear.map((obj) => {
                return (
                  <tr>
                    <td>{obj.date}</td>
                    <td>{obj.school_name}</td>
                    <td>{obj.state}</td>
                    <td>{obj.city}</td>
                    <td>{obj.casualties}</td>
                    <td>{obj.killed}</td>
                    <td>{obj.shooting_type}</td>
                    <td>{obj.weapon}</td>
                    <td>{obj.weapon_source}</td>
                    <td>{obj.race_ethnicity_shooter1}</td>
                    <td>{obj.age_shooter1}</td>
                    <td>{obj.shooter_deceased1 === 1 ? 'yes' : 'no'}</td>
                  </tr>
                )
              }) : ''}
            </tbody>
          </table>
        </Modal>
      </div>
      
    );
  }
  
  export default App;
  
