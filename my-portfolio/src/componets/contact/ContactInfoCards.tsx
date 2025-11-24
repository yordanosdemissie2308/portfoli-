import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfoCards() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yordanoselluwork@gmail.com",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+(251) 919334467",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      gradient: "from-blue-600 to-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {contactInfo.map((info, index) => {
        const Icon = info.icon;
        return (
          <div
            key={index}
            className="group relative bg-white/70 backdrop-blur-md rounded-[28px] p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:-translate-y-1"
          >
            <div
              className={`inline-flex p-4 rounded-[20px] bg-gradient-to-br ${info.gradient} mb-4 shadow-md`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-800 mb-2">{info.label}</h3>
            <p className="text-gray-600">{info.value}</p>
            <div
              className={`absolute inset-0 rounded-[28px] bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
            />
          </div>
        );
      })}
    </div>
  );
}
