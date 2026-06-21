import { useMemo, useState } from 'react'
import './App.css'

const agendaItems = [
  {
    title: 'Sunday Worship Celebration',
    day: 'Sunday',
    date: 'June 29',
    time: '09:00 AM',
    place: 'Main Sanctuary',
    type: 'Worship',
    details: 'Praise, message, and prayer ministry for the full congregation.',
  },
  {
    title: 'Youth Discipleship Circle',
    day: 'Tuesday',
    date: 'July 1',
    time: '07:00 PM',
    place: 'Youth Hall',
    type: 'Youth',
    details: 'Interactive Bible study, mentoring, and small-group reflection.',
  },
  {
    title: 'Community Food Outreach',
    day: 'Thursday',
    date: 'July 3',
    time: '02:00 PM',
    place: 'Neighborhood Center',
    type: 'Outreach',
    details: 'Volunteer service with meal distribution and family support.',
  },
  {
    title: 'Choir Rehearsal',
    day: 'Friday',
    date: 'July 4',
    time: '06:30 PM',
    place: 'Music Room',
    type: 'Music',
    details: 'Preparation for Sunday worship songs and special presentations.',
  },
]

const members = [
  {
    name: 'Pastor Samuel Rodrigues',
    role: 'Lead Pastor',
    ministry: 'Leadership',
    phone: '(555) 010-1100',
    email: 'samuel.rodrigues@gracechurch.org',
    description: 'Provides pastoral direction, counseling, and weekly teaching.',
  },
  {
    name: 'Helena Costa',
    role: 'Church Secretary',
    ministry: 'Administration',
    phone: '(555) 010-1132',
    email: 'helena.costa@gracechurch.org',
    description: 'Coordinates appointments, schedules, and member communications.',
  },
  {
    name: 'Diego Martins',
    role: 'Worship Coordinator',
    ministry: 'Music',
    phone: '(555) 010-1176',
    email: 'diego.martins@gracechurch.org',
    description: 'Organizes music teams, rehearsals, and service flow.',
  },
  {
    name: 'Ana Beatriz Lima',
    role: 'Youth Ministry Leader',
    ministry: 'Youth',
    phone: '(555) 010-1198',
    email: 'ana.lima@gracechurch.org',
    description: 'Guides youth meetings, mentoring programs, and family events.',
  },
  {
    name: 'João Ferreira',
    role: 'Outreach Director',
    ministry: 'Outreach',
    phone: '(555) 010-1214',
    email: 'joao.ferreira@gracechurch.org',
    description: 'Leads local missions, partnerships, and volunteer mobilization.',
  },
  {
    name: 'Marina Alves',
    role: 'Children Coordinator',
    ministry: 'Children',
    phone: '(555) 010-1239',
    email: 'marina.alves@gracechurch.org',
    description: 'Supports children classes, family check-in, and safe ministry routines.',
  },
]

const ministries = ['All ministries', ...new Set(members.map((member) => member.ministry))]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMinistry, setSelectedMinistry] = useState('All ministries')

  const filteredMembers = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase()

    return members.filter((member) => {
      const matchesMinistry =
        selectedMinistry === 'All ministries' || member.ministry === selectedMinistry
      const matchesSearch =
        normalizedQuery.length === 0 ||
        [member.name, member.role, member.description].some((field) =>
          field.toLowerCase().includes(normalizedQuery),
        )

      return matchesMinistry && matchesSearch
    })
  }, [searchTerm, selectedMinistry])

  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Grace Community Church</span>
          <h1>Church agenda and member catalog in one welcoming place.</h1>
          <p className="hero-text">
            Keep the congregation informed with upcoming activities and a searchable
            directory for church leaders, volunteers, and ministry contacts.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#agenda">
              View agenda
            </a>
            <a className="secondary-action" href="#members">
              Explore members
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Church highlights">
          <div className="hero-stat">
            <strong>4</strong>
            <span>events this week</span>
          </div>
          <div className="hero-stat">
            <strong>6</strong>
            <span>member profiles</span>
          </div>
          <div className="hero-stat">
            <strong>5</strong>
            <span>active ministries</span>
          </div>
        </aside>
      </section>

      <section className="highlights-grid" aria-label="Community highlights">
        <article className="info-card">
          <h2>Weekly flow</h2>
          <p>
            Highlight worship services, ministry meetings, rehearsals, and outreach moments
            with clear times and locations.
          </p>
        </article>
        <article className="info-card">
          <h2>Fast contact access</h2>
          <p>
            Give visitors and members direct access to ministry leaders, phone numbers, and
            email contacts.
          </p>
        </article>
        <article className="info-card">
          <h2>User-friendly design</h2>
          <p>
            The layout is responsive, easy to scan, and built to work smoothly on phones,
            tablets, and desktops.
          </p>
        </article>
      </section>

      <section className="section-block" id="agenda">
        <div className="section-heading">
          <div>
            <span className="section-label">This week</span>
            <h2>Church agenda</h2>
          </div>
          <p>Share important events so everyone knows where to be and how to participate.</p>
        </div>

        <div className="agenda-grid">
          {agendaItems.map((item) => (
            <article className="agenda-card" key={`${item.title}-${item.date}`}>
              <div className="agenda-meta">
                <span>{item.day}</span>
                <span>{item.date}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.details}</p>
              <dl className="agenda-details">
                <div>
                  <dt>Time</dt>
                  <dd>{item.time}</dd>
                </div>
                <div>
                  <dt>Place</dt>
                  <dd>{item.place}</dd>
                </div>
              </dl>
              <span className="chip">{item.type}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="members">
        <div className="section-heading">
          <div>
            <span className="section-label">Directory</span>
            <h2>Member catalog</h2>
          </div>
          <p>Search by name or role and filter the list by ministry.</p>
        </div>

        <div className="filters" role="search">
          <label className="field">
            <span>Search members</span>
            <input
              type="search"
              placeholder="Search by name, role, or responsibility"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>

          <label className="field">
            <span>Ministry</span>
            <select
              value={selectedMinistry}
              onChange={(event) => setSelectedMinistry(event.target.value)}
            >
              {ministries.map((ministry) => (
                <option key={ministry} value={ministry}>
                  {ministry}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="members-grid">
          {filteredMembers.map((member) => (
            <article className="member-card" key={member.email}>
              <div className="member-header">
                <div>
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
                <span className="chip">{member.ministry}</span>
              </div>

              <p>{member.description}</p>

              <ul className="contact-list">
                <li>
                  <span>Phone</span>
                  <a href={`tel:${member.phone.replace(/[^\d+]/g, '')}`}>{member.phone}</a>
                </li>
                <li>
                  <span>Email</span>
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </li>
              </ul>
            </article>
          ))}
        </div>

        {filteredMembers.length === 0 ? (
          <div className="empty-state">
            <h3>No members found</h3>
            <p>Try another search term or switch the ministry filter.</p>
          </div>
        ) : null}
      </section>
    </main>
  )
}

export default App
