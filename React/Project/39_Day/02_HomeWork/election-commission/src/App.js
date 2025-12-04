import React, { useState } from 'react';
import { Vote, Users, FileText, Calendar, CheckCircle, Award, Search, Download, BarChart3, Info, Phone, Mail, MapPin } from 'lucide-react';

const styles = {
  gradientHeader: {
    background: 'linear-gradient(to right, #f97316, #ffffff, #22c55e)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    padding: '24px 16px'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px'
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px'
  },
  textBlue: {
    color: '#1e3a8a'
  },
  nav: {
    background: '#1e3a8a',
    color: 'white',
    padding: '12px 0'
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  navItem: {
    cursor: 'pointer',
    fontWeight: '500',
    padding: '8px 16px',
    transition: 'color 0.2s'
  },
  card: {
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    padding: '24px',
    transition: 'transform 0.2s'
  },
  statCard: {
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    padding: '24px',
    color: 'white',
    transition: 'transform 0.2s'
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    outline: 'none'
  },
  button: {
    width: '100%',
    padding: '12px',
    background: '#f97316',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.2s'
  },
  footer: {
    background: '#1e3a8a',
    color: 'white',
    marginTop: '48px',
    padding: '32px 0'
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px'
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px'
  }
};

function Header() {
  return (
    <header style={styles.gradientHeader}>
      <div style={styles.container}>
        <div style={styles.flexCenter}>
          <Award size={48} color="#1e3a8a" />
          <div style={{textAlign: 'center'}}>
            <h1 style={{fontSize: '36px', fontWeight: 'bold', color: '#1e3a8a', margin: 0}}>
              भारत निर्वाचन आयोग
            </h1>
            <h2 style={{fontSize: '24px', fontWeight: '600', color: '#1e40af', margin: '4px 0'}}>
              Election Commission of India
            </h2>
            <p style={{fontSize: '14px', color: '#374151', marginTop: '4px'}}>
              निष्पक्ष और स्वतंत्र चुनाव | Free and Fair Elections
            </p>
          </div>
          <Award size={48} color="#1e3a8a" />
        </div>
      </div>
    </header>
  );
}

function NavigationBar({ activeTab, setActiveTab }) {
  const navItems = ['Home', 'Voter Services', 'Election Schedule', 'Results', 'About Us'];
  
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <ul style={styles.navList}>
          {navItems.map((item, index) => (
            <li 
              key={index} 
              onClick={() => setActiveTab(item)}
              style={{
                ...styles.navItem,
                color: activeTab === item ? '#fdba74' : 'white',
                borderBottom: activeTab === item ? '2px solid #fdba74' : 'none'
              }}
              onMouseEnter={(e) => e.target.style.color = '#fdba74'}
              onMouseLeave={(e) => e.target.style.color = activeTab === item ? '#fdba74' : 'white'}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function StatCard({ icon: Icon, title, value, color }) {
  return (
    <div 
      style={{...styles.statCard, background: color}}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
        <Icon size={48} />
        <div>
          <h3 style={{fontSize: '32px', fontWeight: 'bold', margin: 0}}>{value}</h3>
          <p style={{fontSize: '14px', opacity: 0.9, margin: 0}}>{title}</p>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <div style={{...styles.grid3, marginBottom: '32px'}}>
        <StatCard 
          icon={Users} 
          title="Registered Voters" 
          value="97 Cr+" 
          color="linear-gradient(to bottom right, #3b82f6, #1e40af)"
        />
        <StatCard 
          icon={Vote} 
          title="Polling Stations" 
          value="10.5 L+" 
          color="linear-gradient(to bottom right, #f97316, #c2410c)"
        />
        <StatCard 
          icon={CheckCircle} 
          title="Election Success Rate" 
          value="99.9%" 
          color="linear-gradient(to bottom right, #22c55e, #15803d)"
        />
      </div>

      <div style={{...styles.card, marginBottom: '32px'}}>
        <h2 style={{fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px'}}>
          Welcome to Election Commission of India
        </h2>
        <p style={{color: '#374151', lineHeight: '1.8', marginBottom: '16px'}}>
          भारत निर्वाचन आयोग (Election Commission of India) एक स्वायत्त संवैधानिक निकाय है जो भारत में संघ और राज्य चुनाव प्रक्रियाओं के संचालन के लिए जिम्मेदार है।
        </p>
        <p style={{color: '#374151', lineHeight: '1.8'}}>
          The Election Commission of India is an autonomous constitutional authority responsible for administering Union and State election processes in India. Established on 25th January 1950, we ensure free and fair elections across the nation.
        </p>
      </div>

      <div style={styles.grid2}>
        <div style={{...styles.card, background: 'linear-gradient(to bottom right, #3b82f6, #1e40af)', color: 'white'}}>
          <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '12px'}}>Latest Updates</h3>
          <ul style={{fontSize: '14px', lineHeight: '2'}}>
            <li>• Bihar Assembly Elections announced for March 2025</li>
            <li>• New voter registration drive started across India</li>
            <li>• EVM demonstration scheduled for all districts</li>
            <li>• Model Code of Conduct guidelines updated</li>
          </ul>
        </div>
        <div style={{...styles.card, background: 'linear-gradient(to bottom right, #f97316, #c2410c)', color: 'white'}}>
          <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '12px'}}>Quick Actions</h3>
          <ul style={{fontSize: '14px', lineHeight: '2', cursor: 'pointer'}}>
            <li>→ Check your voter registration status</li>
            <li>→ Download voter ID card</li>
            <li>→ Find your polling station</li>
            <li>→ Lodge a complaint</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function VoterServicesPage() {
  const [searchType, setSearchType] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    { icon: Search, title: 'Search Voter ID', desc: 'Find your voter ID by name or EPIC number' },
    { icon: Download, title: 'Download Voter Card', desc: 'Download your digital voter ID card' },
    { icon: FileText, title: 'New Registration', desc: 'Register as a new voter' },
    { icon: Users, title: 'Update Details', desc: 'Update your voter information' },
    { icon: MapPin, title: 'Find Polling Station', desc: 'Locate your nearest polling booth' },
    { icon: Phone, title: 'Helpline 1950', desc: '24/7 voter helpline support' }
  ];

  return (
    <div>
      <h2 style={{fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '24px'}}>
        Voter Services Portal
      </h2>
      
      <div style={{...styles.card, marginBottom: '32px'}}>
        <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px'}}>
          Search Your Voter Information
        </h3>
        <div style={{marginBottom: '16px', display: 'flex', gap: '16px'}}>
          <button 
            onClick={() => setSearchType('name')}
            style={{
              padding: '12px 24px',
              background: searchType === 'name' ? '#1e3a8a' : '#e5e7eb',
              color: searchType === 'name' ? 'white' : '#374151',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Search by Name
          </button>
          <button 
            onClick={() => setSearchType('epic')}
            style={{
              padding: '12px 24px',
              background: searchType === 'epic' ? '#1e3a8a' : '#e5e7eb',
              color: searchType === 'epic' ? 'white' : '#374151',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Search by EPIC No.
          </button>
        </div>
        
        <input
          type="text"
          placeholder={searchType === 'name' ? 'Enter your full name' : 'Enter your EPIC number'}
          style={{...styles.input, marginBottom: '16px'}}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <button 
          style={styles.button}
          onMouseEnter={(e) => e.target.style.background = '#ea580c'}
          onMouseLeave={(e) => e.target.style.background = '#f97316'}
        >
          Search Now
        </button>
      </div>

      <div style={styles.grid3}>
        {services.map((service, index) => (
          <div 
            key={index} 
            style={styles.card}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'}
          >
            <service.icon size={48} color="#1e3a8a" style={{marginBottom: '16px'}} />
            <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px'}}>
              {service.title}
            </h3>
            <p style={{fontSize: '14px', color: '#6b7280'}}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ElectionSchedulePage() {
  const upcomingElections = [
    { 
      state: 'Bihar Assembly Elections', 
      date: '15 March 2025 - 25 March 2025', 
      phase: '3 Phases',
      status: 'Scheduled',
      voters: '7.5 Cr',
      seats: '243'
    },
    { 
      state: 'Delhi Municipal Corporation', 
      date: '10 April 2025', 
      phase: 'Single Phase',
      status: 'Scheduled',
      voters: '1.2 Cr',
      seats: '250'
    },
    { 
      state: 'Karnataka By-Elections', 
      date: '5 February 2025', 
      phase: 'Single Phase',
      status: 'Announced',
      voters: '2.5 Lakh',
      seats: '3'
    },
    { 
      state: 'West Bengal Panchayat', 
      date: 'May 2025', 
      phase: 'TBA',
      status: 'Proposed',
      voters: '5.8 Cr',
      seats: '63,000+'
    }
  ];

  return (
    <div>
      <h2 style={{fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '24px'}}>
        Election Schedule 2025
      </h2>
      
      <div style={{...styles.card, background: 'linear-gradient(to right, #eff6ff, #fed7aa)', marginBottom: '32px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
          <Calendar size={32} color="#1e3a8a" />
          <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a'}}>Upcoming Elections</h3>
        </div>
        <p style={{color: '#374151'}}>
          Below is the complete schedule of upcoming elections across India. Please check the dates and plan accordingly.
        </p>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
        {upcomingElections.map((election, index) => (
          <div key={index} style={{...styles.card, borderLeft: '4px solid #f97316'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px'}}>
              <div>
                <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px'}}>
                  {election.state}
                </h3>
                <p style={{color: '#6b7280', marginBottom: '4px'}}><strong>Date:</strong> {election.date}</p>
                <p style={{color: '#6b7280'}}><strong>Phase:</strong> {election.phase}</p>
              </div>
              <span style={{
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600',
                background: election.status === 'Announced' ? '#dcfce7' : 
                           election.status === 'Scheduled' ? '#dbeafe' : '#fef3c7',
                color: election.status === 'Announced' ? '#166534' : 
                       election.status === 'Scheduled' ? '#1e40af' : '#a16207'
              }}>
                {election.status}
              </span>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', paddingTop: '16px', borderTop: '1px solid #e5e7eb'}}>
              <div>
                <p style={{fontSize: '14px', color: '#6b7280'}}>Total Voters</p>
                <p style={{fontSize: '20px', fontWeight: 'bold', color: '#1e3a8a'}}>{election.voters}</p>
              </div>
              <div>
                <p style={{fontSize: '14px', color: '#6b7280'}}>Total Seats</p>
                <p style={{fontSize: '20px', fontWeight: 'bold', color: '#1e3a8a'}}>{election.seats}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultsPage() {
  const [selectedState, setSelectedState] = useState('All States');
  
  const recentResults = [
    { state: 'Madhya Pradesh', election: 'Assembly Elections 2023', winner: 'BJP', seats: '163/230', date: 'Dec 2023' },
    { state: 'Rajasthan', election: 'Assembly Elections 2023', winner: 'BJP', seats: '115/200', date: 'Dec 2023' },
    { state: 'Chhattisgarh', election: 'Assembly Elections 2023', winner: 'BJP', seats: '54/90', date: 'Dec 2023' },
    { state: 'Telangana', election: 'Assembly Elections 2023', winner: 'Congress', seats: '64/119', date: 'Dec 2023' },
    { state: 'Mizoram', election: 'Assembly Elections 2023', winner: 'ZPM', seats: '27/40', date: 'Dec 2023' }
  ];

  const downloadStatewisePDF = () => {
    // Create PDF content
    const pdfContent = `
ELECTION COMMISSION OF INDIA
State-wise Election Results 2023
=====================================

${recentResults.map(result => `
${result.state}
-------------------
Election Type: ${result.election}
Winning Party: ${result.winner}
Seats Won: ${result.seats}
Date: ${result.date}
`).join('\n')}

Total States Covered: ${recentResults.length}
Report Generated: ${new Date().toLocaleDateString()}

© Election Commission of India
    `.trim();

    // Create blob and download
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'State-wise-Results-2023.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('State-wise Results downloaded successfully!');
  };

  const downloadStatisticalReport = () => {
    const reportContent = `
ELECTION COMMISSION OF INDIA
Statistical Report 2023
=====================================

OVERALL STATISTICS
------------------
Total Elections Conducted: 5 States
Total Registered Voters: 20+ Crore
Average Voter Turnout: 72.5%
Total Polling Stations: 2,50,000+
EVMs Used: 5,00,000+

STATE-WISE BREAKDOWN
--------------------
${recentResults.map(result => `
${result.state}:
  - Winner: ${result.winner}
  - Seats: ${result.seats}
  - Date: ${result.date}
`).join('\n')}

PARTY-WISE PERFORMANCE
----------------------
BJP: 3 States
Congress: 1 State
ZPM: 1 State

Report Generated: ${new Date().toLocaleDateString()}

© Election Commission of India
All Rights Reserved
    `.trim();

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Statistical-Report-2023.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('Statistical Report downloaded successfully!');
  };

  return (
    <div>
      <h2 style={{fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '24px'}}>
        Election Results
      </h2>
      
      <div style={{...styles.card, marginBottom: '32px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
          <BarChart3 size={32} color="#1e3a8a" />
          <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a'}}>Recent Election Results</h3>
        </div>
        
        <div style={{marginBottom: '24px'}}>
          <label style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px'}}>
            Filter by State
          </label>
          <select 
            style={{...styles.input, width: '300px'}}
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option>All States</option>
            <option>Madhya Pradesh</option>
            <option>Rajasthan</option>
            <option>Chhattisgarh</option>
            <option>Telangana</option>
            <option>Mizoram</option>
          </select>
        </div>

        <div style={{overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead style={{background: '#1e3a8a', color: 'white'}}>
              <tr>
                <th style={{padding: '12px', textAlign: 'left'}}>State</th>
                <th style={{padding: '12px', textAlign: 'left'}}>Election Type</th>
                <th style={{padding: '12px', textAlign: 'left'}}>Winner</th>
                <th style={{padding: '12px', textAlign: 'left'}}>Seats Won</th>
                <th style={{padding: '12px', textAlign: 'left'}}>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentResults.map((result, index) => (
                <tr key={index} style={{borderBottom: '1px solid #e5e7eb'}}>
                  <td style={{padding: '12px', fontWeight: '500'}}>{result.state}</td>
                  <td style={{padding: '12px'}}>{result.election}</td>
                  <td style={{padding: '12px'}}>
                    <span style={{
                      padding: '4px 12px',
                      background: '#fed7aa',
                      color: '#c2410c',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      {result.winner}
                    </span>
                  </td>
                  <td style={{padding: '12px', fontWeight: 'bold', color: '#1e3a8a'}}>{result.seats}</td>
                  <td style={{padding: '12px', color: '#6b7280'}}>{result.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{...styles.card, background: 'linear-gradient(to right, #eff6ff, #fed7aa)'}}>
        <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '12px'}}>
          Download Detailed Reports
        </h3>
        <div style={styles.grid2}>
          <button 
            onClick={() => downloadStatewisePDF()}
            style={{...styles.card, cursor: 'pointer', background: 'white', textAlign: 'left', padding: '16px'}}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
          >
            <Download size={20} color="#1e3a8a" style={{display: 'inline', marginRight: '8px'}} />
            <span style={{fontWeight: '500'}}>State-wise Results PDF</span>
          </button>
          <button 
            onClick={() => downloadStatisticalReport()}
            style={{...styles.card, cursor: 'pointer', background: 'white', textAlign: 'left', padding: '16px'}}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
          >
            <Download size={20} color="#1e3a8a" style={{display: 'inline', marginRight: '8px'}} />
            <span style={{fontWeight: '500'}}>Statistical Report 2023</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function AboutUsPage() {
  const commissioners = [
    { name: 'Chief Election Commissioner', role: 'CEC', image: '👤' },
    { name: 'Election Commissioner 1', role: 'EC', image: '👤' },
    { name: 'Election Commissioner 2', role: 'EC', image: '👤' }
  ];

  return (
    <div>
      <h2 style={{fontSize: '28px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '24px'}}>
        About Election Commission of India
      </h2>
      
      <div style={{...styles.card, marginBottom: '32px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px'}}>
          <Info size={32} color="#1e3a8a" />
          <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a'}}>Our History</h3>
        </div>
        <p style={{color: '#374151', lineHeight: '1.8', marginBottom: '16px'}}>
          भारत निर्वाचन आयोग की स्थापना 25 जनवरी 1950 को की गई थी। यह भारत का एक स्वायत्त संवैधानिक निकाय है जो देश में लोक सभा, राज्य सभा, राज्य विधानसभाओं और राष्ट्रपति एवं उपराष्ट्रपति के चुनाव का संचालन करता है।
        </p>
        <p style={{color: '#374151', lineHeight: '1.8', marginBottom: '16px'}}>
          The Election Commission of India was established on 25th January 1950. It is an autonomous constitutional authority responsible for administering election processes in India at national and state levels.
        </p>
        <p style={{color: '#374151', lineHeight: '1.8'}}>
          Originally consisting of only the Chief Election Commissioner, the commission now consists of three Election Commissioners who work together to ensure free, fair, and transparent elections.
        </p>
      </div>

      <div style={{...styles.card, background: 'linear-gradient(to right, #eff6ff, #fed7aa)', marginBottom: '32px'}}>
        <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '24px'}}>
          Election Commissioners
        </h3>
        <div style={styles.grid3}>
          {commissioners.map((commissioner, index) => (
            <div key={index} style={{...styles.card, textAlign: 'center', background: 'white'}}>
              <div style={{fontSize: '64px', marginBottom: '16px'}}>{commissioner.image}</div>
              <h4 style={{fontWeight: 'bold', fontSize: '18px', color: '#1e3a8a'}}>{commissioner.name}</h4>
              <p style={{fontSize: '14px', color: '#6b7280'}}>{commissioner.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{...styles.grid2, marginBottom: '32px'}}>
        <div style={styles.card}>
          <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px'}}>Our Mission</h3>
          <ul style={{color: '#374151', lineHeight: '2'}}>
            <li>• Conduct free, fair and transparent elections</li>
            <li>• Ensure participation of all eligible citizens</li>
            <li>• Maintain electoral integrity and credibility</li>
            <li>• Promote voter awareness and education</li>
            <li>• Implement latest technology in election process</li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px'}}>Our Vision</h3>
          <ul style={{color: '#374151', lineHeight: '2'}}>
            <li>• Strengthen democratic participation</li>
            <li>• Enhance electoral transparency</li>
            <li>• Build trust in democratic institutions</li>
            <li>• Ensure inclusive and accessible elections</li>
            <li>• Set global standards in election management</li>
          </ul>
        </div>
      </div>

      <div style={styles.card}>
        <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px'}}>
          Contact Information
        </h3>
        <div style={styles.grid2}>
          <div>
            <div style={{display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px'}}>
              <MapPin size={24} color="#1e3a8a" style={{marginTop: '4px'}} />
              <div>
                <p style={{fontWeight: '600', color: '#374151'}}>Address</p>
                <p style={{color: '#6b7280'}}>Nirvachan Sadan, Ashoka Road<br/>New Delhi - 110001, India</p>
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'start', gap: '12px'}}>
              <Phone size={24} color="#1e3a8a" style={{marginTop: '4px'}} />
              <div>
                <p style={{fontWeight: '600', color: '#374151'}}>Helpline</p>
                <p style={{color: '#6b7280'}}>1950 (Toll Free)<br/>+91-11-23052205</p>
              </div>
            </div>
          </div>
          <div>
            <div style={{display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px'}}>
              <Mail size={24} color="#1e3a8a" style={{marginTop: '4px'}} />
              <div>
                <p style={{fontWeight: '600', color: '#374151'}}>Email</p>
                <p style={{color: '#6b7280'}}>eci@eci.gov.in<br/>complaints@eci.gov.in</p>
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'start', gap: '12px'}}>
              <Info size={24} color="#1e3a8a" style={{marginTop: '4px'}} />
              <div>
                <p style={{fontWeight: '600', color: '#374151'}}>Office Hours</p>
                <p style={{color: '#6b7280'}}>Monday - Friday: 9:00 AM - 6:00 PM<br/>Helpline: 24x7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContent({ activeTab }) {
  return (
    <main style={{...styles.container, paddingTop: '32px', paddingBottom: '32px'}}>
      {activeTab === 'Home' && <HomePage />}
      {activeTab === 'Voter Services' && <VoterServicesPage />}
      {activeTab === 'Election Schedule' && <ElectionSchedulePage />}
      {activeTab === 'Results' && <ResultsPage />}
      {activeTab === 'About Us' && <AboutUsPage />}
    </main>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={{...styles.grid3, marginBottom: '24px'}}>
          <div>
            <h4 style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '12px'}}>Quick Links</h4>
            <ul style={{fontSize: '14px', lineHeight: '2', listStyle: 'none', padding: 0}}>
              <li style={{cursor: 'pointer'}}>Voter Helpline</li>
              <li style={{cursor: 'pointer'}}>Electoral Roll</li>
              <li style={{cursor: 'pointer'}}>Model Code of Conduct</li>
              <li style={{cursor: 'pointer'}}>Press Release</li>
            </ul>
          </div>
          <div>
            <h4 style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '12px'}}>Contact Us</h4>
            <ul style={{fontSize: '14px', lineHeight: '2', listStyle: 'none', padding: 0}}>
              <li>Helpline: 1950</li>
              <li>Email: eci@eci.gov.in</li>
              <li>Address: Nirvachan Sadan, New Delhi</li>
            </ul>
          </div>
          <div>
            <h4 style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '12px'}}>Important</h4>
            <ul style={{fontSize: '14px', lineHeight: '2', listStyle: 'none', padding: 0}}>
              <li style={{cursor: 'pointer'}}>Download Voter Slip</li>
              <li style={{cursor: 'pointer'}}>Track Your Application</li>
              <li style={{cursor: 'pointer'}}>Election Results</li>
              <li style={{cursor: 'pointer'}}>RTI Act</li>
            </ul>
          </div>
        </div>
        <hr style={{borderColor: '#1e40af', marginBottom: '16px'}} />
        <div style={{textAlign: 'center', fontSize: '14px'}}>
          <p>© 2025 Election Commission of India. All Rights Reserved.</p>
          <p style={{marginTop: '8px'}}>भारत निर्वाचन आयोग - लोकतंत्र का संरक्षक | Guardian of Democracy</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div style={{minHeight: '100vh', background: '#f3f4f6'}}>
      <Header />
      <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainContent activeTab={activeTab} />
      <Footer />
    </div>
  );
}