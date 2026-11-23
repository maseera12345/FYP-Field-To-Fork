import { useState } from "react";
import { ArrowRight, Leaf, Mail, Search, ShieldCheck, TriangleAlert } from "lucide-react";
import Container from "../components/layout/Container";
import Logo from "../components/brand/Logo";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Modal from "../components/ui/Modal";
import { Input, Select, Textarea } from "../components/ui/FormFields";
import { Skeleton, Spinner } from "../components/ui/Loader";

const swatches = [
  { name: "Field Teal", hex: "#0E5A52" },
  { name: "Deep Teal", hex: "#072F2B" },
  { name: "Leaf Green", hex: "#4FA23F" },
  { name: "Harvest Amber", hex: "#F2A93B" },
  { name: "Page", hex: "#FAF8F3" },
  { name: "Border", hex: "#E4DFD2" },
  { name: "Ink", hex: "#14231F" },
  { name: "Danger", hex: "#D64545" },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Section({ title, children }) {
  return (
    <section className="mt-12">
      <h2 className="mb-5 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

export default function DesignSystem() {
  const [modalOpen, setModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = () =>
    setEmailError(email && !emailPattern.test(email) ? "Enter a valid email address." : "");

  const fakeSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1500);
  };

  return (
    <Container className="py-12">
      <h1 className="text-4xl font-extrabold">Design system</h1>
      <p className="mt-2 max-w-2xl text-ink-soft">
        Every shared component in one place. Use this page to test the look, hover states and interactions before building real pages.
      </p>

      <Section title="Colours">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {swatches.map((s) => (
            <div key={s.hex} className="card overflow-hidden">
              <div className="h-16" style={{ background: s.hex }} />
              <div className="p-3 text-sm">
                <p className="font-semibold">{s.name}</p>
                <p className="tabular text-ink-muted">{s.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Logo">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="flex items-center justify-center py-10">
            <Logo size={48} tagline />
          </Card>
          <div className="flex items-center justify-center rounded-card bg-brand-900 py-10">
            <Logo size={48} theme="dark" tagline />
          </div>
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="cta" rightIcon={ArrowRight}>Call to action</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Reject order</Button>
          <Button loading={saving} onClick={fakeSave}>{saving ? "Saving" : "Click to load"}</Button>
          <Button disabled>Disabled</Button>
          <Button size="sm" variant="outline">Small</Button>
        </div>
      </Section>

      <Section title="Badges">
        <div className="flex flex-wrap gap-2">
          <Badge tone="leaf" icon={Leaf}>Fresh</Badge>
          <Badge tone="brand" icon={ShieldCheck}>Verified farmer</Badge>
          <Badge tone="harvest">Pending</Badge>
          <Badge tone="warning" icon={TriangleAlert}>Low stock</Badge>
          <Badge tone="danger">Rejected</Badge>
          <Badge tone="info">Weather alert</Badge>
          <Badge tone="neutral">Draft</Badge>
        </div>
      </Section>

      <Section title="Cards">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Basmati rice", "Rs 320 / kg", "Punjab"],
            ["Wheat (Gandum)", "Rs 4,100 / 40 kg", "Sindh"],
            ["Mangoes (Sindhri)", "Rs 280 / kg", "Sindh"],
          ].map(([name, price, region]) => (
            <Card key={name} hover>
              <Badge tone="leaf">Fresh</Badge>
              <h3 className="mt-3 text-lg font-bold">{name}</h3>
              <p className="tabular mt-1 text-xl font-extrabold text-brand-600">{price}</p>
              <p className="mt-1 text-sm text-ink-muted">{region}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Form fields">
        <Card className="grid gap-5 md:grid-cols-2">
          <Input
            label="Email"
            type="email"
            icon={Mail}
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            error={emailError}
            hint="Type a wrong email, then click outside the field."
          />
          <Input label="Search crops" icon={Search} placeholder="Wheat, rice, mango" />
          <Select
            label="Crop category"
            placeholder="Select a category"
            options={[
              { value: "wheat", label: "Wheat" },
              { value: "rice", label: "Rice" },
              { value: "vegetables", label: "Vegetables" },
              { value: "fruits", label: "Fruits" },
            ]}
          />
          <Input label="Price per kg" type="number" min="0" placeholder="320" />
          <div className="md:col-span-2">
            <Textarea label="Description" placeholder="Describe your crop, harvest date and quality." />
          </div>
        </Card>
      </Section>

      <Section title="Modal and loaders">
        <div className="flex flex-wrap items-center gap-6">
          <Button variant="outline" onClick={() => setModalOpen(true)}>Open modal</Button>
          <Spinner />
          <div className="w-64 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </Section>

      <Section title="Dashboard layouts">
        <p className="mb-4 text-ink-soft">Preview the sidebar and top bar for each role.</p>
        <div className="flex flex-wrap gap-3">
          <Button to="/farmer" variant="primary">Farmer layout</Button>
          <Button to="/buyer" variant="outline">Buyer layout</Button>
          <Button to="/admin" variant="outline">Admin layout</Button>
        </div>
      </Section>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Reject this order?"
        footer={
          <>
            <Button variant="ghost" onClick={() => setModalOpen(false)}>Keep order</Button>
            <Button variant="danger" onClick={() => setModalOpen(false)}>Reject order</Button>
          </>
        }
      >
        The buyer will be notified. This is a sample dialog: press Escape or click outside to close it.
      </Modal>
    </Container>
  );
}
