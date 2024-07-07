import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
      <p className="text-lg">Discover our amazing products and special offers.</p>
      <Button variant="primary" size="lg">Shop Now</Button>
    </div>
  );
};

export default Index;