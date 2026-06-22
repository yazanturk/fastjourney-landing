import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { sendEmail } from '@/lib/emailService';

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  in:      { opacity: 1, y: 0 },
  out:     { opacity: 0, y: -24 },
};

const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.5 };

const fieldVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.35 + i * 0.1, duration: 0.45 } }),
};

const JoinJamlPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const body = `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`;
    const html = `<p><strong>Name:</strong> ${form.name}</p><p><strong>Phone:</strong> ${form.phone}</p><hr/><p>${form.message.replace(/\n/g, '<br/>')}</p>`;

    try {
      await sendEmail({
        to: 'yazan.turk@fastjourneyco.com',
        subject: `Join Jaml Request: ${form.name}`,
        body,
        html,
      });
      toast({ title: 'Request received', description: "We'll be in touch soon." });
      setForm({ name: '', phone: '', message: '' });
    } catch (error) {
      toast({ title: 'Failed to send', description: error.message || 'Please try again or contact us directly.', variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  const fields = [
    {
      key: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Your name',
      icon: User,
    },
    {
      key: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: '+966 5X XXX XXXX',
      icon: Phone,
    },
  ];

  const inputStyle = (key) => ({
    width: '100%',
    padding: '14px 16px 14px 44px',
    border: `1.5px solid ${focused === key ? 'var(--jaml-plum)' : 'var(--jaml-border-2)'}`,
    borderRadius: 'var(--jaml-radius-md)',
    fontFamily: 'var(--jaml-font)',
    fontSize: '15px',
    fontWeight: 400,
    color: 'var(--jaml-ink)',
    background: focused === key ? 'var(--jaml-plum-tint)' : 'var(--jaml-surface)',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    boxShadow: focused === key ? '0 0 0 3px rgba(135,40,87,0.12)' : 'none',
  });

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        minHeight: '100vh',
        background: 'var(--jaml-grad-bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px 60px',
        fontFamily: 'var(--jaml-font)',
      }}
    >
      {/* wordmark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{ marginBottom: 8, textAlign: 'center' }}
      >
        <span style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
        }}>
          Join
        </span>
        <div style={{
          fontSize: 48,
          fontWeight: 700,
          color: '#fff',
          lineHeight: 1,
          marginTop: 4,
          letterSpacing: '-0.01em',
        }}>
          Jaml
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        style={{
          color: 'rgba(255,255,255,0.65)',
          fontSize: 15,
          textAlign: 'center',
          maxWidth: 340,
          marginBottom: 40,
          lineHeight: 1.6,
        }}
      >
        Leave your details and we'll reach out to get you started.
      </motion.p>

      {/* card */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          background: 'var(--jaml-surface)',
          borderRadius: 'var(--jaml-radius-sheet)',
          boxShadow: 'var(--jaml-shadow-modal)',
          padding: '40px 36px',
          width: '100%',
          maxWidth: 420,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        {fields.map(({ key, label, type, placeholder, icon: Icon }, i) => (
          <motion.div
            key={key}
            custom={i}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
          >
            <label
              htmlFor={key}
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--jaml-plum)',
                fontFamily: 'var(--jaml-font)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <Icon size={14} />
              {label}
            </label>
            <div style={{ position: 'relative' }}>
              <Icon
                size={16}
                style={{
                  position: 'absolute',
                  left: 14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: focused === key ? 'var(--jaml-plum)' : 'var(--jaml-ink-4)',
                  transition: 'color 0.2s',
                  pointerEvents: 'none',
                }}
              />
              <input
                id={key}
                name={key}
                type={type}
                placeholder={placeholder}
                value={form[key]}
                onChange={handleChange}
                onFocus={() => setFocused(key)}
                onBlur={() => setFocused(null)}
                required
                style={inputStyle(key)}
              />
            </div>
          </motion.div>
        ))}

        {/* message textarea */}
        <motion.div
          custom={2}
          variants={fieldVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
        >
          <label
            htmlFor="message"
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--jaml-plum)',
              fontFamily: 'var(--jaml-font)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <MessageSquare size={14} />
            Message
          </label>
          <div style={{ position: 'relative' }}>
            <MessageSquare
              size={16}
              style={{
                position: 'absolute',
                left: 14,
                top: 16,
                color: focused === 'message' ? 'var(--jaml-plum)' : 'var(--jaml-ink-4)',
                transition: 'color 0.2s',
                pointerEvents: 'none',
              }}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Tell us how you'd like to be part of Jaml..."
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              required
              rows={4}
              style={{
                ...inputStyle('message'),
                padding: '14px 16px 14px 44px',
                resize: 'vertical',
                minHeight: 110,
              }}
            />
          </div>
        </motion.div>

        {/* submit */}
        <motion.button
          type="submit"
          disabled={submitting}
          whileHover={{ scale: submitting ? 1 : 1.02 }}
          whileTap={{ scale: submitting ? 1 : 0.97 }}
          style={{
            marginTop: 4,
            padding: '15px',
            borderRadius: 'var(--jaml-radius-pill)',
            border: 'none',
            cursor: submitting ? 'not-allowed' : 'pointer',
            background: submitting ? 'var(--jaml-plum-deep)' : 'var(--jaml-plum)',
            color: '#fff',
            fontFamily: 'var(--jaml-font)',
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: '0.01em',
            boxShadow: submitting ? 'none' : 'var(--jaml-shadow-glow)',
            transition: 'background 0.2s, box-shadow 0.2s',
          }}
        >
          {submitting ? 'Sending…' : 'Send Request'}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default JoinJamlPage;
