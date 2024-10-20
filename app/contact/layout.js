export const metadata = {
    title: "Contact App",
    description: "This is a sample Next.js application."
  }

export default function ContactLayout({ children }) {
    return (
      <div>
        <h2>Contact Section</h2>
        <div>{children}</div>
      </div>
    );
  }