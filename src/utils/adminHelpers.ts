
import { formatAriary, convertEuroToAriary } from "./formatCurrency";

// Generate sample reservation data
export const generateSampleReservations = () => {
  const circuitTitles = [
    "Circuit Découverte du Nord",
    "Aventure dans l'Est Sauvage",
    "Exploration des Hautes Terres",
    "Séjour Plage et Détente",
    "Tour des Parcs Nationaux"
  ];
  
  const customers = [
    { name: "Jean Dupont", email: "jean.dupont@example.com", phone: "+33 6 12 34 56 78" },
    { name: "Marie Laurent", email: "marie.laurent@example.com", phone: "+33 6 23 45 67 89" },
    { name: "Pierre Martin", email: "pierre.martin@example.com", phone: "+33 6 34 56 78 90" },
    { name: "Sophie Dubois", email: "sophie.dubois@example.com", phone: "+33 6 45 67 89 01" },
    { name: "Thomas Leroy", email: "thomas.leroy@example.com", phone: "+33 6 56 78 90 12" }
  ];
  
  // Helper to generate random date in the past 30 days
  const randomPastDate = () => {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    return date;
  };
  
  // Helper to generate random date in the future 90 days
  const randomFutureDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * 90) + 7);
    return date;
  };
  
  // Generate 10-15 random reservations
  const count = Math.floor(Math.random() * 6) + 10;
  const sampleData = [];
  
  for (let i = 0; i < count; i++) {
    const personCount = Math.floor(Math.random() * 4) + 1;
    const pricePerPerson = Math.floor(Math.random() * 1000) + 1000;
    const totalAmount = personCount * pricePerPerson;
    
    const customer = customers[Math.floor(Math.random() * customers.length)];
    const circuit = circuitTitles[Math.floor(Math.random() * circuitTitles.length)];
    
    const createdAt = randomPastDate();
    const startDate = randomFutureDate();
    
    // Determine payment status - 60% verified, 30% received, 10% awaiting
    let paymentStatus;
    const paymentRoll = Math.random();
    if (paymentRoll < 0.6) {
      paymentStatus = 'verified';
    } else if (paymentRoll < 0.9) {
      paymentStatus = 'received';
    } else {
      paymentStatus = 'awaiting';
    }
    
    // Create payment info if not 'awaiting'
    let paymentInfo = null;
    if (paymentStatus !== 'awaiting') {
      const paymentDate = new Date(createdAt);
      paymentDate.setDate(createdAt.getDate() + Math.floor(Math.random() * 3) + 1);
      
      paymentInfo = {
        reference: `PAY-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
        name: customer.name,
        phone: customer.phone,
        amount: totalAmount,
        timestamp: paymentDate
      };
    }
    
    sampleData.push({
      id: `RES-${i+1}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      circuitTitle: circuit,
      customerInfo: customer,
      personCount,
      totalAmount,
      startDate,
      createdAt,
      paymentStatus,
      paymentInfo,
      notes: Math.random() > 0.7 ? "Client demande une chambre avec vue mer si possible" : ""
    });
  }
  
  return sampleData;
};

// Calculate statistics from reservations
export const calculateStats = (reservations) => {
  if (!reservations || reservations.length === 0) {
    return {
      totalRevenue: 0,
      pendingPayments: 0,
      newCustomers: 0,
      upcomingTours: 0
    };
  }

  const revenue = reservations.reduce((sum, res) => 
    res.paymentStatus === 'verified' ? sum + convertEuroToAriary(res.totalAmount) : sum, 0);
  
  const pending = reservations.filter(r => r.paymentStatus === 'awaiting' || r.paymentStatus === 'received').length;
  
  const uniqueCustomers = new Set(reservations.map(r => r.customerInfo.email)).size;
  
  const upcomingTours = reservations.filter(r => 
    new Date(r.startDate) > new Date() && 
    (r.paymentStatus === 'verified' || r.paymentStatus === 'received')
  ).length;
  
  return {
    totalRevenue: revenue,
    pendingPayments: pending,
    newCustomers: uniqueCustomers,
    upcomingTours: upcomingTours
  };
};
