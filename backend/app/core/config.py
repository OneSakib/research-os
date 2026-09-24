from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings loaded from environment variables or a .env file."""

    app_name: str = "Research OS API"
    debug: bool = False
    api_v1_prefix: str = "/api/v1"

    # database
    postgres_user: str = "research_os_user"
    postgres_password: str = "research_os_password"
    postgres_db: str = "research_os_db"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )


settings = Settings()
