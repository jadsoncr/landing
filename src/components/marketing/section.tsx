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
          <div className="mx-auto max-w-3xl text-center mb-16">
            {title && (
              <h2 className="text-balance">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg sm:text-xl text-gray-600 text-balance">
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
