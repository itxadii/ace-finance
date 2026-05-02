export default function Navbar() {
    return (
      <nav className="p-4 shadow-md flex justify-between">
        <h1 className="font-bold text-lg">ACE Finance</h1>
        <div className="flex gap-4">
          <a href="/">Home</a>
          <a href="/home-loan">Home Loan</a>
          <a href="/personal-loan">Personal Loan</a>
          <a href="/business-loan">Business Loan</a>
        </div>
      </nav>
    );
  }