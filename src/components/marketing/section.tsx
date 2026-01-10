import * as React from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "gradient";
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  background = "white",
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-gray-50 via-white to-gray-50",
  };

  return (
    <section
      id={id}
      className={`section-spacing ${bgClasses[background]} ${className}`}
    >
      <div className="container-premium">
        {(title || subtitle) && (
          <div className="mx-auto max-w-2xl text-center mb-16">
            {title && (
              <h2 className="mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
