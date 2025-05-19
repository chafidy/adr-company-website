
export interface Circuit {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  price: number;
  duration: number;
  featured: boolean;
  destinations: string[];
  departureDates: string[];
}

export interface Reservation {
  id: string;
  circuitId: string;
  circuitTitle: string;
  startDate: string;
  personCount: number;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  paymentStatus: 'awaiting' | 'received' | 'verified';
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  paymentInfo?: {
    name: string;
    phone: string;
    reference: string;
    amount: number;
    timestamp: string;
  };
  createdAt: string;
}

export interface PaymentConfirmation {
  reservationId: string;
  name: string;
  phone: string;
  reference: string;
  amount: number;
  timestamp: string;
}
