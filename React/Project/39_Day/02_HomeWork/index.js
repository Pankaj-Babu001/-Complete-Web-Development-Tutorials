const { useState } = React;

// Icon components using FontAwesome
const Vote = ({ className }) => <i className={`fas fa-vote-yea ${className}`}></i>;
const Users = ({ className }) => <i className={`fas fa-users ${className}`}></i>;
const FileText = ({ className }) => <i className={`fas fa-file-alt ${className}`}></i>;
const Calendar = ({ className }) => <i className={`fas fa-calendar-alt ${className}`}></i>;
const CheckCircle = ({ className }) => <i className={`fas fa-check-circle ${className}`}></i>;
const Award = ({ className }) => <i className={`fas fa-award ${className}`}></i>;

function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-500 via-white to-green-500 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-4">
          <Award className="text-5xl text-blue-900" />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-900">भारत निर्वाचन आयोग</h1>
            <h2 className="text-2xl font-semibold text-blue-800">Election Commission of India</h2>
            <p className="text-sm text-gray-700 mt-1">निष्पक्ष और स्वतंत्र चुनाव | Free and Fair Elections</p>
          </div>
          <Award className="text-5xl text-blue-900" />
        </div>
      </div>
    </header>
  );
}

function NavigationBar() {
  const navItems = ['Home', 'Voter Services', 'Election Schedule', 'Results', 'About Us'];
  
  return (
    <nav className="bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center gap-8 py-3">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-orange-300 cursor-pointer transition-colors duration-200 font-medium">
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
    <div className={`${color} rounded-lg shadow-md p-6 text-white transform hover:scale-105 transition-transform duration-200`}>
      <div className="flex items-center gap-4">
        <Icon className="text-5xl" />
        <div>
          <h3 className="text-3xl font-bold">{value}</h3>
          <p className="text-sm opacity-90">{title}</p>
        </div>
      </div>
    </div>
  );
}

function VoterRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    state: '',
    voterId: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration Details:\nName: ${formData.name}\nAge: ${formData.age}\nState: ${formData.state}\nVoter ID: ${formData.voterId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <FileText className="text-2xl" />
        Voter Registration
      </h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input
          type="number"
          placeholder="Age"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.age}
          onChange={(e) => setFormData({...formData, age: e.target.value})}
        />
        <select 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.state}
          onChange={(e) => setFormData({...formData, state: e.target.value})}
        >
          <option value="">Select State</option>
          <option value="Bihar">Bihar</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Delhi">Delhi</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
        </select>
        <input
          type="text"
          placeholder="Voter ID (if already registered)"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.voterId}
          onChange={(e) => setFormData({...formData, voterId: e.target.value})}
        />
        <button 
          onClick={handleSubmit}
          className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors duration-200"
        >
          Check Status / Register
        </button>
      </div>
    </div>
  );
}

function UpcomingElections() {
  const elections = [
    { state: 'Bihar Assembly', date: 'March 2025', status: 'Scheduled' },
    { state: 'Delhi Municipal', date: 'April 2025', status: 'Scheduled' },
    { state: 'Karnataka By-Election', date: 'February 2025', status: 'Announced' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        <Calendar className="text-2xl" />
        Upcoming Elections
      </h3>
      <div className="space-y-3">
        {elections.map((election, index) => (
          <div key={index} className="border-l-4 border-orange-500 pl-4 py-2 bg-gray-50">
            <h4 className="font-semibold text-lg text-gray-800">{election.state}</h4>
            <p className="text-sm text-gray-600">Date: {election.date}</p>
            <span className="inline-block mt-1 px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              {election.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          icon={Users} 
          title="Registered Voters" 
          value="97 Cr+" 
          color="bg-gradient-to-br from-blue-500 to-blue-700"
        />
        <StatCard 
          icon={Vote} 
          title="Polling Stations" 
          value="10.5 L+" 
          color="bg-gradient-to-br from-orange-500 to-orange-700"
        />
        <StatCard 
          icon={CheckCircle} 
          title="Election Success Rate" 
          value="99.9%" 
          color="bg-gradient-to-br from-green-500 to-green-700"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <VoterRegistration />
        <UpcomingElections />
      </div>

      {/* Information Section */}
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">About Election Commission of India</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          भारत निर्वाचन आयोग (Election Commission of India) एक स्वायत्त संवैधानिक निकाय है जो भारत में संघ और राज्य चुनाव प्रक्रियाओं के संचालन के लिए जिम्मेदार है।
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Election Commission of India is an autonomous constitutional authority responsible for administering Union and State election processes in India. It was established on 25th January 1950.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-blue-900 mb-2">Our Mission</h4>
            <p className="text-sm text-gray-600">Conducting free, fair, and transparent elections across India</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-blue-900 mb-2">Our Vision</h4>
            <p className="text-sm text-gray-600">Strengthening democratic participation and electoral integrity</p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h4 className="font-bold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-300 cursor-pointer">Voter Helpline</li>
              <li className="hover:text-orange-300 cursor-pointer">Electoral Roll</li>
              <li className="hover:text-orange-300 cursor-pointer">Model Code of Conduct</li>
              <li className="hover:text-orange-300 cursor-pointer">Press Release</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Helpline: 1950</li>
              <li>Email: eci@eci.gov.in</li>
              <li>Address: Nirvachan Sadan, New Delhi</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">Important</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-300 cursor-pointer">Download Voter Slip</li>
              <li className="hover:text-orange-300 cursor-pointer">Track Your Application</li>
              <li className="hover:text-orange-300 cursor-pointer">Election Results</li>
              <li className="hover:text-orange-300 cursor-pointer">RTI Act</li>
            </ul>
          </div>
        </div>
        <hr className="border-blue-700 mb-4" />
        <div className="text-center text-sm">
          <p>© 2025 Election Commission of India. All Rights Reserved.</p>
          <p className="mt-2">भारत निर्वाचन आयोग - लोकतंत्र का संरक्षक | Guardian of Democracy</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <NavigationBar />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);