// All the website's words live here, so content changes don't need design changes.

export const contact = {
  name: "N. Patil",
  phoneDisplay: "+91 88844 92282",
  phoneTel: "+918884492282",
  whatsapp: "918884492282",
  email: "patilns161@gmail.com",
  city: "Bengaluru, Karnataka",
  gstin: "29AFZPP6446F1ZL",
  indiamart: "https://www.indiamart.com/stamforttechnicalsolutions/",
  // Web3Forms access key: public by design (it only lets people send this form).
  web3formsKey: "293af006-fca7-4abc-9d19-912afeb0f220",
};

// WhatsApp chat link with a starter message, used by the hero button and the floating button.
export const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  "Hello, I have a machine that needs repair or maintenance."
)}`;

export const plate = [
  ["Founded", "May 2016"],
  ["Experience", "25+ years"],
  ["Fields", "Mechanical, electrical, hydraulic, pneumatic"],
  ["Makes", "Any make, Indian or imported"],
  ["Base", "Bengaluru, working across India"],
  ["Languages", "Kannada, Hindi, Tamil, Telugu, English"],
];

export const valueAdds = [
  "Minimum machine downtime",
  "Process efficiency improvements",
  "Solutions to industrial bottlenecks, from concept level",
  "Machine breakdown troubleshooting",
  "Industrial automation",
  "Overhauling of equipment",
  "Poka-yoke (mistake-proofing) solutions",
  "Operator training",
];

export const industries = [
  "Cement",
  "Power and pump stations",
  "Crane maintenance",
  "Manufacturing",
  "Pharmaceuticals",
  "Food processing",
];

export const machines = [
  "Metal cutting",
  "Sheet metal working",
  "Wood working",
  "Injection moulding machines",
  "Glass working machines",
  "Paper working machines",
  "Special purpose machines",
  "Corrugated box machines",
  "Conveyor systems",
  "Air compressors",
  "Pumps, mixers and agitators",
  "Blowers and exhaust systems",
  "Gearboxes and heat exchangers",
  "CNC laser machines",
  "Diesel generators",
  "Flour mills",
  "Jewellery spot welding machines",
];

// From the IndiaMART profile: the repair jobs customers ask for most.
export const commonRepairs = [
  ["CNC laser machines", "Diagnosis and repair to cut downtime"],
  ["Press brakes", "Diagnosis and repair, across Karnataka"],
  ["Air compressors", "Screw compressors: breakdown repair, diagnostics and preventive maintenance, on site or in our shop"],
  ["Diesel generators", "On-site inspection and repair, Kirloskar and Cummins, up to 15 kVA"],
  ["Gold jewellery spot welding machines", "On-site repair"],
  ["Flour mills", "On-site repair of domestic atta chakkis"],
];

// From the IndiaMART profile: machines Stamfort builds and supplies.
export const supplied = [
  {
    name: "Mini hydraulic manual press",
    specs: ["Hand lever operation", "Maximum force 1 tonne", "100 mm stroke", "H-frame"],
  },
  {
    name: "Vertical hydraulic baling machine",
    specs: ["Vertical, hydraulically operated", "Ask us for capacity and size"],
  },
  {
    name: "Pneumatic edge banding frame machine",
    specs: [
      "Manual, low-cost alternative to automatic edge banders",
      "Workpiece thickness 10 to 60 mm",
      "Edge band thickness 0.4 to 3 mm",
    ],
  },
];

export const services = [
  {
    title: "Repair and maintenance",
    items: [
      "Preventive maintenance",
      "Breakdown and reactive maintenance",
      "Troubleshooting",
      "Retrofitting",
      "Overhauling",
    ],
  },
  {
    title: "Improvements and automation",
    items: [
      "Design improvements",
      "Automation of special purpose machines",
      "Solutions to bottlenecks, from concept level",
      "Poka-yoke solutions",
    ],
  },
  {
    title: "Fabrication",
    items: [
      "Mild steel and stainless steel job work, to your requirements",
      "Piping and supports",
      "Steam exhaust ducts and structures",
    ],
  },
  {
    title: "Electrical",
    items: [
      "Electrical control panels",
      "Installation of LT and HT equipment",
      "Transformers",
      "Diesel generators",
    ],
  },
];

// A real sequence, so it is shown as numbered steps.
export const commissioningSteps = [
  "Site inspection",
  "Detailed requirements of the setup",
  "Handling of the equipment",
  "Placement on site, with every safety criterion followed",
  "Erection by our crew and engineers, with least defects",
];

export const aboutMachines = [
  "Mechanical and power presses",
  "Shearing machines and press brakes",
  "EOT cranes",
  "CNC milling and turning centres",
  "Centralised lubrication systems",
];

export const career = [
  ["Godrej & Boyce Mfg. Co. Ltd.", "India"],
  ["Nordson (India) Pvt. Ltd.", "India"],
  ["Makino (India) Pvt. Ltd.", "India"],
  ["BFW Ltd.", "India"],
  ["Cummins FZE", "UAE"],
  ["G & D Italia", "Tripoli, Libya"],
];

export const work = [
  { src: "/work/rotary-indexing-table.jpg", w: 1600, h: 1200, caption: "Rotary indexing table for a label printing machine" },
  { src: "/work/mini-hydraulic-press.jpg", w: 995, h: 1600, caption: "Mini hydraulic manual press" },
  { src: "/work/custom-mechanism-1.jpg", w: 1600, h: 900, caption: "Special purpose mechanism" },
  { src: "/work/baling-machine.jpg", w: 900, h: 1600, caption: "Vertical hydraulic baling machine" },
  { src: "/work/edge-banding-machine.jpg", w: 1600, h: 900, caption: "Pneumatic edge banding frame machine" },
  { src: "/work/adjustable-stand.jpg", w: 900, h: 1600, caption: "Height-adjustable stand, fabricated in mild steel" },
  { src: "/work/adjustable-stands.jpg", w: 1600, h: 900, caption: "Height-adjustable stands" },
  { src: "/work/hose-packing-machine.jpg", w: 1325, h: 621, caption: "Hose packing machine, 3D design" },
];
